const info = {
  "patron-1": {
    Badge: "https://codesandbox.io/static/media/patron-1.9ae4ce47.svg",
    particleCount: 10,
    colors: ["#1BB978"]
  },
  "patron-2": {
    Badge: "https://codesandbox.io/static/media/patron-2.54335a0f.svg",
    particleCount: 20,
    colors: ["#B53D3D", "#1BB978"]
  },
  "patron-3": {
    Badge: "https://codesandbox.io/static/media/patron-3.be5fda19.svg",
    particleCount: 35,
    colors: ["#609AC3", "#1BB978", "#B53D3D"]
  },
  "patron-4": {
    Badge: "https://codesandbox.io/static/media/patron-4.ead5fa20.svg",
    particleCount: 100,
    colors: ["#D0AF72", "#1BB978", "#B53D3D", "#609AC3"]
  }
};

// Preload the images
Object.keys(info).forEach(badge => {
  new Image().src = info[badge].Badge;
});

export default info;
