import { useRef, useState } from 'react';
import LaserFlow from '../components/LaserFlow';
import Stepper, { Step } from '../components/Stepper';
import axios from 'axios';

export default function Form() {
  const cardRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [massage, setMassage] = useState('');

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <LaserFlow
        surfaceRef={cardRef}
        beamPosition={0.5}
        color="#2bc20e"
        intensity={0.5}
        flare={1.5}
        spread={2}
        spill={1.4}
        fog={0.45}
        dust={1.6}
        revealImage="/your-ui.png"
        revealRadius={350}
        revealOpacity={0.6}
        beamWidth={0.75}
        streaks={0.85}
        dots={1}
        pulse={0.8}
        speed={1.65}
        seed={4}
        mouseInteraction
        intro
      />
      <form id="contact-form" ref={cardRef} className='form-card' onSubmit={(e) => { e.preventDefault() }}>
        <Stepper
          initialStep={1}
          // onStepChange={!setName=='' && console.log('Name is Empty')}
          onFinalStepCompleted={() => {
            axios.post(`${import.meta.env.VITE_API_URL}/api/form`, {
              Name: name,
              Email: email,
              Phone: phone,
              Massage: massage
            })
            setName('');
            setEmail('');
            setPhone('');
            setMassage('');
          }}
          backButtonText="Back"
          nextButtonText="Continue"
        >
          <Step title="Welcome">
            <h3 className='text-center'>Contact Me</h3>
            <p className='text-center'>Fill the form And we will contant you right away.</p>
          </Step>
          <Step title="Name">
            <h3>Enter Your Name</h3>
            <input className='form-input' required type="text" name="Name" id="name" placeholder="Your name"
              indicator="dots"
              orientation="horizontal"
              transition="fade"
              width={400}
              radius={24}
              frame
              linear={false}
              disableStepIndicators={false}
              showFooter
              onChange={(e) => { setName(e.target.value) }}
              completeButtonText="Next"
            />
          </Step>
          <Step required title="Email">
            <h3 className='text-center'>Enter Your Email</h3>
            <input className='form-input' type="email" name="Email" id="Email" placeholder="Your Email"
              indicator="dots"
              orientation="horizontal"
              transition="fade"
              width={400}
              radius={24}
              frame
              linear={false}
              disableStepIndicators={false}
              showFooter
              onChange={(e) => { setEmail(e.target.value) }}
              completeButtonText="Next"
            />
          </Step>
          <Step title="Phone">
            <h3 className='text-center'>Enter Your Phone</h3>
            <input className='form-input' type="Phone" name="Phone" id="Phone" placeholder="Your Phone"
              indicator="dots"
              orientation="horizontal"
              transition="fade"
              width={400}
              radius={24}
              frame
              linear={true}
              disableStepIndicators={false}
              showFooter
              onChange={(e) => { setPhone(e.target.value) }}
              minLength={8}
              maxLength={12}
              completeButtonText="Next"
            />
          </Step>
          <Step title="Massage">
            <h3 className='text-center'>Enter Your Massage</h3>
            <textarea className='form-input' name="Massege" id="Massege" placeholder="Your Massage"
              indicator="dots"
              orientation="horizontal"
              transition="fade"
              width={400}
              radius={24}
              frame
              linear={false}
              disableStepIndicators={false}
              showFooter
              onChange={(e) => { setMassage(e.target.value) }}
              completeButtonText="Next"
            />
          </Step>
        </Stepper>
      </form>
    </div>
  );
}