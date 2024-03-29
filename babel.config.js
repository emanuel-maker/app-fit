module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        
        "module-resolver",
        {
          root: ['.'],
          alias: {
            "@services": "./src/services",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@models": "./src/models",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
