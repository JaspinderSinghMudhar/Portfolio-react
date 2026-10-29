import React from 'react'
import StaggeredMenu from '../ReactBits/StaggeredMenu';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiFigmaFill, RiFiverrFill, RiUpworkFill } from "react-icons/ri";
import TechText from '../components/TechText';
import CursorGrid from '../components/CursorGrid';
import LogoLoop from '../components/LogoLoop';
import RotatingText from '../components/RotatingText';
import HalftoneReveal from '../components/HalftoneReveal';
import ScrollReveal from '../components/ScrollReveal';
import TextLoop from '../components/TextLoop';
import MagnetLines from '../components/MagnetLines';
import SpotlightCard from '../components/SpotlightCard';
import FallingText from '../components/FallingText';
import Form from '../ReactBits/form-row'
import Projects from '../pages/Projects'



import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNodejsFill,
  RiWordpressFill,
  RiLayoutMasonryFill,
  RiApps2Fill,
} from "react-icons/ri";
import {
  SiFigma,
  SiJquery,
  SiGreensock,
  SiExpress,
  SiEjs,
  SiCpanel,
  SiPhpmyadmin,
  SiPython,
  SiGooglesearchconsole,
  SiYoast,
  SiHotjar,
} from "react-icons/si";

const imageLogos = [
  { node: <SiFigma />, title: "Figma" },
  { node: <RiHtml5Fill />, title: "HTML" },
  { node: <RiCss3Fill />, title: "CSS" },
  { node: <RiJavascriptFill />, title: "JS" },
  { node: <SiJquery />, title: "jQuery" },
  { node: <SiGreensock />, title: "GSAP" },
  { node: <RiReactjsFill />, title: "React" },
  { node: <RiNodejsFill />, title: "Node" },
  { node: <SiExpress />, title: "Express" },
  { node: <SiEjs />, title: "EJS" },
  { node: <RiApps2Fill />, title: "ReactBits" },
  { node: <RiWordpressFill />, title: "WordPress" },
  { node: <RiLayoutMasonryFill />, title: "WordPress Theme" },
  { node: <SiCpanel />, title: "cPanel" },
  { node: <SiPhpmyadmin />, title: "phpMyAdmin" },
  { node: <SiPython />, title: "Python" },
  { node: <SiGooglesearchconsole />, title: "Google Search Console" },
  { node: <SiYoast />, title: "Yoast SEO" },
  { node: <SiHotjar />, title: "Hotjar" },
];


const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Projects', ariaLabel: 'View our Projects', link: '/Projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: <FaSquareGithub />, link: 'https://github.com/JaspinderSinghMudhar' },
  { label: <FaLinkedin />, link: 'https://www.linkedin.com/in/jaspinder-singh-5802a1262/' },
  { label: <RiFigmaFill />, link: 'https://www.figma.com/@jaspinder' },
  { label: <RiFiverrFill />, link: 'https://www.fiverr.com/jaspindermudhar/design-and-develop-your-website-from-ui-to-fully-customized-wordpress-theme' },
  { label: <RiUpworkFill />, link: 'https://www.upwork.com/freelancers/~01a40efec16d8ea22c?mp_source=share' }
];

function Home() {
  return (
    <>
      <CursorGrid
        cellSize={50}
        color="#2bc20e"
        highlight="area"
        gridStyle="crosses"
        radius={180}
        holdTime={400}
        fadeDuration={800}
        fillOpacity={0.08}
        gridOpacity={0.3}
        spotlight={0.8}
        clickPulse
      >
        <div className='header-menu'>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#2bc20e', '#ecf39e']}
            logoUrl="/logo.svg"
            accentColor="#2bc20e"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />

          <div className="hero-text">
            <TechText
              text="JASPINDER SINGH"
              fontWeight={600}
              fontSize={100}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="type"
              introDuration={2}
              clickKick
              guides={false}
              fontFamily=""
              letterSpacing={-0.05}
              accentColor="#fff"
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              color="#2bc20e"
              align="center"
              draggable
              sweep
            />
          </div>
        </div>
      </CursorGrid>
      <div style={{ position: 'relative', overflow: 'hidden', background: '#000', color: '#fff', marginTop: '-30px' }}>
        <div className="tec-logo flex justify-center w-[100%] gap-[20px]">
          <h3 className='uppercase'>Technologies I</h3><h3><RotatingText
            texts={['WORK\'s WITH', 'PLAY WITH', 'HAVE FUN WITH']}
            effect="drop"
            direction="up"
            highlight
            highlightColor="#2bc20e"
            staggerFrom="first"
            staggerDuration={0.04}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            rotationInterval={2000}
            splitBy="characters"
            blur={0}
            auto
            loop
            pauseOnHover={false}
          /></h3>
        </div>
        <LogoLoop
          logos={imageLogos}
          peed={100}
          direction="left"
          logoHeight={30}
          gap={44}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
          focus={1}
          tiltY={40}
          tiltX={0}
          fadeOutWidth={0.1}
          magnify={0.8}
          labels="hover"
          muted={1}
        />
      </div>
      <div className='about container flex justify-around mt-[40px]' style={{ width: '100%', height: '600px', position: 'relative' }}>
        <div className="about-image w-[50%]">
          <HalftoneReveal
            src="/me.webp"
            mode="mono"
            shape="dot"
            cellSize={6}
            angle={45}
            // inkColor="#2bc20e"
            inkColor="#fff"
            paperColor="#000"
            revealRadius={160}
            dotScale={1}
            contrast={1.1}
            brightness={0}
            invert={false}
            roughness={0}
            misregistration={0}
            fit="contain"
            accentColor="#ff4f2a"
            softness={0.6}
            linger={1.2}
            reverse={false}
            wander={false}
            clickBurst
            intro
          />
        </div>
        <div className='about-info bg-black w-[50%] text-white'>
          <h2 className='uppercase text-primary!'>About</h2>
          <ScrollReveal
            highlightColor="#2bc20e"
            mode="scrub"
            splitBy="words"
            effect="rise"
            stagger={0.6}
            duration={0.01}
            smoothing={0.5}
            baseOpacity={0.3}
            baseRotation={10}
            baseOffset={11}
            enableBlur
            blurStrength={4}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers a disease?
            No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
      </div>
      <div className='cross-tape-text uppercase'>
        <TextLoop
          text="Web Developer ✦ Web Designer"
          shape="line"
          speed={75}
          direction="forward"
          separator="✦"
          curviness={86}
          tilt={0}
          fontSize={46}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          ribbon
          ribbonColor="#2bc20e"
          ribbonWidth={86}
          edgeFade={0}
          // cross
          // crossAngle={16}
          draggable={true}
          scrollBoost={3}
          outline={false}
          pauseOnHover
          outlineWidth={1.5}
          color="#000000"
        // crossColor="#ffffff"
        />
      </div>
      <div className="expirence relative mt-[-280px] py-[120px]">
        <div className='bg-element-cards'>
          <MagnetLines
            lineColor="#4a4a4a"
            spacing={26}
            lineWidth={2}
            lineHeight={15}
            mode="orbit"
            shape="line"
            radius={160}
            fade={0.65}
            baseAngle={-10}
            // edgeFade={0.5}
            stretch={0.4}
            reach={0}
            scatter={0}
            inertia={0.35}
            bounce={0.3}
            ripple={0.3}
            rainbow={false}
            tiltX={55}
            tiltY={0}
            clickPulse
            intro
            idle={false}
            accentColor="#2bc20e"
          />
        </div>
        <h2 className='text-primary text-center uppercase'>Expirence</h2>
        <div className="exp-cards flex justify-around gap-4 p-4 m-4">
          <div className="exp-1 w-[45%]">
            <SpotlightCard
              theme="dark"
              spotlightColor="#2bc20e"
              intensity={0.15}
              spotlightSize={200}
              softness={0.7}
              shape="circle"
              borderGlow={1}
              proximity={110}
              smoothing={0.7}
              grain={0.35}
            // ambient
            // flare
            >
              <img src="igzy.png" alt="" className='w-3xs m-auto py-3' />
              <h3>Web Developer</h3>
              <h5>2021 - 2024</h5>
              <p className='font-bold mt-3'>Tech I work with</p>
              <div className="tech-work-with">
                <FallingText
                  text="Figma, HTML, CSS, JavaScript, jQuery, Python, WordPress, WordPress Theme, Git, GitHub, cPanel, phpMyAdmin, Yoast SEO, GA4, Google Search Console, and Hotjar."
                  highlightWords={['Figma', 'JavaScript', 'Python', 'WordPress Theme', 'Git']}
                  trigger="hover"
                  fontSize="16px"
                  gravity={0.1}
                  restoreDelay={0.5}
                  variant="text"
                  split="words"
                  order="random"
                  bounciness={0.2}
                  scatter={0.5}
                  stagger={0.03}
                  cursorPush={0.5}
                  mouseConstraintStiffness={0.2}
                  accentColor="#2bc20e"
                  draggable
                // wireframes
                />
              </div>
            </SpotlightCard>
          </div>
          <div className="exp-2 w-[45%]">
            <SpotlightCard
              theme="dark"
              spotlightColor="#2bc20e"
              intensity={0.15}
              spotlightSize={200}
              softness={0.7}
              shape="circle"
              borderGlow={1}
              proximity={110}
              smoothing={0.7}
              grain={0.35}
              ambient
              flare
            >
              <img src="vsplash.png" alt="" className='w-3xs m-auto py-3' />
              <h3>Wordpress Integrator</h3>
              <h5>2024 - 2026</h5>
              <p className='font-bold mt-3'>Tech I work with</p>
              <div className="tech-work-with">
                <FallingText
                  text="Figma, HTML, CSS, JavaScript, jQuery, GSAP, React, Node.js, Express.js, EJS, ReactBits, WordPress, WordPress Theme, cPanel, phpMyAdmin, Python, Google Search Console, Yoast SEO, and Hotjar."
                  highlightWords={['Figma', 'JavaScript', 'Python', 'WordPress Theme', 'Git']}
                  trigger="hover"
                  fontSize="16px"
                  gravity={0.1}
                  restoreDelay={0.5}
                  variant="text"
                  split="words"
                  order="random"
                  bounciness={0.2}
                  scatter={0.5}
                  stagger={0.03}
                  cursorPush={0.5}
                  mouseConstraintStiffness={0.2}
                  accentColor="#2bc20e"
                  draggable
                />
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="forms">
       <Form/>
      </div >
    </>
  )
}

export default Home