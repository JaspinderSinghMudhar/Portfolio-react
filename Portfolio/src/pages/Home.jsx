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
import InfiniteMenu from '../components/InfiniteMenu';
import Form from '../ReactBits/form-row'



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


const items_new = [{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8130b"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/youtuber-merch-stores-design/",
  "image": "/YouTuber-Merch-Stores-Design.png",
  "title": "YouTuber Merch Stores Design",
  "dis": "I built this complete YouTube merch store design specifically for the Figma community, and it's totally free to use! Packed with 13 customizable pages, this design keeps WooCommerce functionality in mind, making it a breeze to integrate into your online store.",
  "tags_content_1": "Figma",
  "tags_content_2": "Visit Demo Site - Not Responsive Yet",
  "project_url": "https://www.figma.com/community/file/1358025552211221222",
  "slug": "youtuber-merch-stores-design"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8130c"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/portfolio-website-project/",
  "image": "/Porfolio.png",
  "title": "Portfolio Website Project",
  "dis": "I've built a user-friendly, fully responsive portfolio website showcasing my skills. The clean layout seamlessly navigates across all devices, featuring dedicated sections like \"Home,\" \"Projects,\" \"About,\" and \"Contact Us.\" A creative 404 page ensures a smooth user experience even for unexpected clicks.",
  "tags_content_1": "Figma",
  "tags_content_2": "WordPress",
  "tags_content_3": "API",
  "tags_content_4": "Custom Post",
  "project_url": "https://www.figma.com/community/file/1350063687525024507/portfolio-design-for-developer",
  "slug": "portfolio-website-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8130d"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/marketing-portfolio-project/",
  "image": "/Marketing-Website-Design-project-Cover.png",
  "title": "Marketing Portfolio Project",
  "dis": "I design impactful portfolios specifically tailored for TikTok marketing experts. These portfolios showcase expertise through dedicated sections like \"Home,\" \"Case Studies,\" and \"Contact Us,\" while a strategic popup captures leads. Each page seamlessly blends captivating visuals, clear messaging, and a user-friendly layout, making a strong impression on potential clients.",
  "tags_content_1": "Figma",
  "project_url": "https://www.figma.com/community/file/1350008747324546739",
  "slug": "marketing-portfolio-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8130e"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/single-pager-portfolio-project/",
  "image": "/Single-pager-protfolio-project-cover.png",
  "title": "Single Pager Portfolio Project",
  "dis": "I craft impactful single-page portfolios that showcase your work in a unique and engaging way. These streamlined experiences seamlessly blend captivating visuals, strategic content, and clear calls to action, leaving a lasting impression on potential clients.",
  "tags_content_1": "Figma",
  "project_url": "https://www.figma.com/community/file/1350043786335993568",
  "slug": "single-pager-portfolio-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8130f"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/restore-humanity/",
  "image": "/projects1.png",
  "title": "Restore Humanity",
  "dis": "Delivered B2C success through a freshly built website by merging creative design, lead-focused forms, and Figma illustrations, all crafted from the ground up.",
  "tags_content_1": "Figma",
  "tags_content_2": "Illustration",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/project-restore-humanity.pdf",
  "slug": "restore-humanity"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81310"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/chatbot-for-leads/",
  "image": "/landing-bot.jpg",
  "title": "Chatbot for Leads",
  "dis": "I ditched a boring static landing page by introducing a chatbot in the landing page for more personalized experience. It gathers valuable info during conversation, and converts visitors into leads with targeted offers. It's a lead gen machine and a window into my audience's needs - all in one!",
  "tags_content_1": "JavaScript",
  "project_url": "https://github.com/JaspinderSinghMudhar/Chatbot",
  "slug": "chatbot-for-leads"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81311"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/user-journey-tracking/",
  "image": "/User-Journey-Tracking.png",
  "title": "User Journey Tracking",
  "dis": "I built a JavaScript code that tracks website visitors and captures their information when they submit a lead form. This lets me see how users interact with the site and understand which visitors convert into leads, providing valuable insights for marketing efforts.",
  "tags_content_1": "JavaScript",
  "project_url": "https://github.com/JaspinderSinghMudhar/Web-Devloper-for-Beginner/blob/main/Perfect%20JS/Journey-tracker.js",
  "slug": "user-journey-tracking"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81312"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/certificate-generation-tool/",
  "image": "/Certificate-Generation-tool.png",
  "title": "Certificate Generation tool",
  "dis": "I developed a Python script to automate certificate generation for the marketing team. This eliminated the need for expensive external tools and significantly reduced manual workload. All it needs is Uploading a recipient list and certificate draft and it automates certificate generation with personalized names.",
  "tags_content_1": "Python",
  "project_url": "https://github.com/JaspinderSinghMudhar/certificate_writer",
  "slug": "certificate-generation-tool"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81313"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/remotemax/",
  "image": "/projects2.png",
  "title": "RemoteMAX",
  "dis": "Unleashed B2B excellence with a dynamic website from scratch by blending  innovative design, lead-capturing forms, and Figma illustrations.",
  "tags_content_1": "WordPress",
  "tags_content_2": "Figma",
  "tags_content_3": "Illustrations",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/RemoteMAX.pdf",
  "slug": "remotemax"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81314"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/pids-landing-page/",
  "image": "/PIDS-thumb.png",
  "title": "PIDS Landing Page Project",
  "dis": "A project centered around a PIDS landing page project for a Cloud-based Perimeter Intrusion Detection System. The primary emphasis was on crafting a landing page that equally highlights the visual elements.",
  "tags_content_1": "WordPress",
  "tags_content_2": "Figma",
  "tags_content_3": "Owl-Carousel",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/PIDS.pdf",
  "slug": "pids-landing-page"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81315"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/bfsi-landing-page-project/",
  "image": "/bfsi.png",
  "title": "BFSI Landing Page Project",
  "dis": "In the BFSI landing page project, I crafted a dynamic website from scratch for B2B communication. By merging innovative design, lead-capturing forms, and Figma illustrations, the goal was to showcase the delivered value proposition for the BFSI industry.",
  "tags_content_1": "WordPress",
  "tags_content_2": "Figma",
  "tags_content_3": "Owl-Carousel",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/bfsi-landing-page.pdf",
  "slug": "bfsi-landing-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81316"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/warehouse-landing-page-project/",
  "image": "/warehouse-thumb.png",
  "title": "Warehouse Landing Page Project",
  "dis": "The Warehouse Landing Page Project aimed to boost lead generation through a mix of embedded videos, social proofs, sliders, widgets, infographics, and user-friendly lead-capturing forms.",
  "tags_content_1": "WordPress",
  "tags_content_2": "Owl-Carousel",
  "tags_content_3": "Figma",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/warehouse.pdf",
  "slug": "warehouse-landing-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81317"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/ip-camera-to-cloud-landing-page-project/",
  "image": "/IP-to-Cloud-thumb.png",
  "title": "IP Camera to Cloud Landing Page Project",
  "dis": "Built from the ground up, this IP Camera landing page uses a captivating mix of lead forms, Figma illustrations, and embedded videos to create a seamless and informative user experience.",
  "tags_content_1": "WordPress",
  "tags_content_2": "Figma",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/IP-to-Cloud.pdf",
  "slug": "ip-camera-to-cloud-landing-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81318"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/cloud-surveillance-landing-page-project/",
  "image": "/Cloud-sur-thumb.png",
  "title": "Cloud surveillance Landing Page Project",
  "dis": "This cloud surveillance landing page, meticulously crafted from the ground up, utilizes intuitive lead capture forms, compelling Figma illustrations, and strategic video integration to foster a seamless and informative user experience.",
  "tags_content_1": "WordPress",
  "tags_content_2": "JavaScript",
  "tags_content_3": "Figma",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/Cloud-sur.pdf",
  "slug": "cloud-surveillance-landing-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb81319"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/manufacturing-landing-page-project/",
  "image": "/manufacturing-thumb.png",
  "title": "Manufacturing Landing Page Project",
  "dis": "I design high-converting manufacturing landing pages that target specific customer needs. These pages utilize clear value propositions, compelling visuals, and strategic CTAs (calls to action) to capture leads and nurture them into qualified prospects.",
  "tags_content_1": "Owl-Carousel",
  "tags_content_2": "WordPress",
  "tags_content_3": "Figma",
  "tags_content_4": "Animations",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/manufacturing.pdf",
  "slug": "manufacturing-landing-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8131a"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/remote-monitoring-landing-page-project/",
  "image": "/remote-thumb.png",
  "title": "Remote Monitoring Landing Page Project",
  "dis": "Laser-focused on specific remote monitoring needs, I design high-converting landing pages leveraging clear value propositions, captivating visuals, and strategic CTAs to capture high-intent leads.",
  "tags_content_1": "wordPress",
  "tags_content_2": "Figma",
  "tags_content_3": "Owl-Carousel",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/remote.pdf",
  "slug": "remote-monitoring-landing-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8131b"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/career-page-project/",
  "image": "/Igzy-thumb.png",
  "title": "Career Page Project",
  "dis": "I craft compelling career pages that showcase company culture and attract top talent. These pages highlight mission, benefits, and open positions, all designed to give candidates a clear picture of why this is a great place to work.",
  "tags_content_1": "WordPress",
  "tags_content_2": "PHP",
  "tags_content_3": "JQuery",
  "tags_content_4": "Figma",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/Igzy.pdf",
  "slug": "career-page-project"
},
{
  "_id": {
    "$oid": "6aca64b67fa194c83bb8131c"
  },
  "web_scraper_start_url": "https://jaspinder-singh.com/js-projects/ip-camera-landing-page-project/",
  "image": "/IP-CAM-thumb.png",
  "title": "IP Camera Landing Page Project",
  "dis": "IP Camera Landing Page project meticulously developed from scratch, it seamlessly blends lead-capturing forms, Figma illustrations, embedded videos, widgets, and grouped content for an enriched user experience.",
  "tags_content_1": "WordPress",
  "tags_content_2": "JavaScript",
  "tags_content_3": "Figma",
  "project_url": "https://jaspinder-singh.com/wp-content/uploads/2024/02/IP-CAM.pdf",
  "slug": "ip-camera-landing-page-project"
}]

const new_mapped_items = items_new.map((e) => {
  return {
    image: 'projects' + e.image,
    link: e.project_url,
    title: e.title,
    description: e.dis
  }
})

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
        <div style={{ height: '100vh', position: 'relative' }}>
          <InfiniteMenu
            items={new_mapped_items}
            count={200}
            tileSize={0.55}
            roundness={0.2}
            zoom={1.6}
            pullBack={1}
            stretch={0.3}
            inertia={0.8}
            autoplay={1}
            grayscale
            dim={0}
            intro
            showInfo
            theme="dark"
            accentColor="#2bc20e"
          />
        </div>
      </div>
      <div className="forms">
       <Form/>
      </div >
    </>
  )
}

export default Home