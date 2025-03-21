const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/https://github.com/jon2502/new_rpg_character_libary_with_routes/' : '/'
})
