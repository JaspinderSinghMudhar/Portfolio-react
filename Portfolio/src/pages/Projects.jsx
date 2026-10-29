import InfiniteMenu from '../components/InfiniteMenu';

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