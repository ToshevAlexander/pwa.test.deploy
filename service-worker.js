if(!self.define){let e,c={};const a=(a,d)=>(a=new URL(a+".js",d).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,b)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(c[f])return;let i={};const s=e=>a(e,f),o={module:{uri:f},exports:i,require:s};c[f]=Promise.all(d.map((e=>o[e]||s(e)))).then((e=>(b(...e),i)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-144x144.png",revision:"a6185bd6d416766708610dec6ed4c1b4"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-192x192.png",revision:"2ae2da055857931c6ceda546621ca76c"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-256x256.png",revision:"3b805e9c202dbf98f0919da1fec60337"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-36x36.png",revision:"3a8f42c5e8bdf4ac88fd6765fdaedebc"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-384x384.png",revision:"7294de67f35feaee2278af0bf2367633"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-48x48.png",revision:"b665d46ca29effc62a14d756734a239e"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-512x512.png",revision:"151f1520941e3c48263ac46b103a6183"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-72x72.png",revision:"1afd0b189d189167e32e6776718811b5"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/android-chrome-96x96.png",revision:"c0f066e8a126e401dba808a2af41e444"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-1024x1024.png",revision:"6130c050791d8980ba6fd1c8eb37970f"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-114x114.png",revision:"a2fde344eeacb0854b4c954809769873"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-120x120.png",revision:"69988144e2d4c2151455a49c005a6eed"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-144x144.png",revision:"9efb00c29a48c040baf651e18988398f"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-152x152.png",revision:"dbceb1765be58666ea9bd8bf400fc82e"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-167x167.png",revision:"69c123889c667ceaaa8cc1835a22b667"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-180x180.png",revision:"caf83080f3a55408e5f1780320a812fb"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-57x57.png",revision:"bbfbae42b52aa10011c644a098a6f1e4"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-60x60.png",revision:"38e2b2b66dbba526465fa12aaa96d135"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-72x72.png",revision:"f6e745ec2cef995a8381e9b19d6f4242"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-76x76.png",revision:"79ab33d9dace1fa4006883fd00521067"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon-precomposed.png",revision:"caf83080f3a55408e5f1780320a812fb"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-icon.png",revision:"caf83080f3a55408e5f1780320a812fb"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1125x2436.png",revision:"e3219e868bef997f7cc551b3cd508eae"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1136x640.png",revision:"7df0e9fa1d8a25e20d14c07b31428053"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1170x2532.png",revision:"a69e0bd5e420a086ae5695ee2663e8ea"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1179x2556.png",revision:"c508722d3116d472b4869eb81c7d00d6"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1242x2208.png",revision:"415f1a2bbe03872f49465d88718802a3"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1242x2688.png",revision:"1a8073176e8ecaf9d88220b07edc2756"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1284x2778.png",revision:"f54291badb9dae7ef27024fceabdcf93"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1290x2796.png",revision:"b28b9b2edfd40912ea3ddcbdaf66b80c"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1334x750.png",revision:"7454da24dc86ae79631e1e29d2dd3fe4"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1488x2266.png",revision:"ace14fa12f38072da05ce764114c72ae"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1536x2048.png",revision:"393dfb3a5e144e36eb7997945258d0a0"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1620x2160.png",revision:"ad34ea838188a213b3c5065fccb7e90b"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1640x2160.png",revision:"5e62d97e7e1612d1281b5163e6e2bdeb"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1668x2224.png",revision:"cfb010722e94b72a6f113c4bc0a0acfc"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1668x2388.png",revision:"766918085695af06b5b0264923862e0f"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-1792x828.png",revision:"dc54bf9a67b4b153c49a061fee7276b5"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2048x1536.png",revision:"efb93913be022b82c16353335befdbe6"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2048x2732.png",revision:"5fc4d69dace6c738c9e05f40aa84e750"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2160x1620.png",revision:"feceaa63826d213e18f8b1d909491799"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2160x1640.png",revision:"944c09097631d3daf39be095760a7f40"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2208x1242.png",revision:"0fba2e7940443df067d7eed19e92920d"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2224x1668.png",revision:"86d410561af121b2bdc5872b260d3c83"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2266x1488.png",revision:"9c8571860daf77d436f1702a88659c1d"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2388x1668.png",revision:"b21a23b12f34ce0d2b436188bdde941f"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2436x1125.png",revision:"75ee98d08ff9da41fc2a062b49b20da2"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2532x1170.png",revision:"5e438c806102ae006549dd65b2fb6e8d"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2556x1179.png",revision:"08798a7b2f204cb370ff14371b962bad"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2688x1242.png",revision:"b6413e76b894ce9ee81a0c5e17907c7a"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2732x2048.png",revision:"1eb79ba2cc2f9ed77fb3de09e4e783ea"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2778x1284.png",revision:"a2aea375e7b969e0f4078dd82f8773f7"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-2796x1290.png",revision:"aec416cc68d25b9716c8a364025f0d01"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-640x1136.png",revision:"915ea6c9997254e83a86b350a0952c82"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-750x1334.png",revision:"4258ac4edbd2686f0b9db648684198ce"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/apple-touch-startup-image-828x1792.png",revision:"649d664c20c2fe4f5d0d94dea17a33f4"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/browserconfig.xml",revision:"b2c5abf2b91648116fdf6e412f6d2677"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/favicon-16x16.png",revision:"ede486edb8086b3443ce70493f9b042c"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/favicon-32x32.png",revision:"76cd2c52e1d14ef0b93ec2ff93bb6b5d"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/favicon-48x48.png",revision:"b665d46ca29effc62a14d756734a239e"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/favicon.ico",revision:"8a4c0cb5f73e063fd04582156489714c"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/manifest.webmanifest",revision:"e0f0abe15dd5597c6a41a8b0e2871661"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/mstile-144x144.png",revision:"a6185bd6d416766708610dec6ed4c1b4"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/mstile-150x150.png",revision:"eb0b7dd606827df5f8a12c5bf5151469"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/mstile-310x150.png",revision:"a12c364db362149d777631f7e836c70b"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/mstile-310x310.png",revision:"9d657403c7d8c90da95416e6d7ed0dbf"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/mstile-70x70.png",revision:"ce576cb75face0fb3ecfc7098c1af4ac"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/yandex-browser-50x50.png",revision:"6edae3e4012a1089a16be8d57afd6bbe"},
    {url:"icons-4f0344c9adfb2b594dcbd3ff5a752e37edcfbcc4c1b3936e4c1e23515dcbaae4/yandex-browser-manifest.json",revision:"dd7cc3bdce0d2bf142763b8081df671d"},
    {url:"index.html",revision:"7fcbb9ad0890d51d0dbc8375aad55cb0"},
    {url:"ios/100.png",revision:"f7e44d3f63570d6c5e04a5ead71f63b2"},
    {url:"ios/1024.png",revision:"0a55d41102c9410a3dc8a1000469d8a0"},
    {url:"ios/114.png",revision:"1dd26ce6494e5918c24eaf39527eb87d"},
    {url:"ios/120.png",revision:"751a70a5de7bbedc53e49ad645e8b9a0"},
    {url:"ios/128.png",revision:"855e3341e90408d268a89d1de30d27b7"},
    {url:"ios/144.png",revision:"07183997386c546b6a5ebd37c78c0379"},
    {url:"ios/152.png",revision:"6e8bfd82a3d82735dca8c590e30cf59e"},
    {url:"ios/16.png",revision:"217a16ae5aca7d3b83c145df4a149431"},
    {url:"ios/167.png",revision:"445708cf8b80f972f138d3865048e207"},
    {url:"ios/180.png",revision:"6c370b66f4a8363ea79ea1e101cccdea"},
    {url:"ios/192.png",revision:"e2d6e9e04a9f5adef5e2ba6b752c6dd9"},
    {url:"ios/20.png",revision:"9da64a9b7a75cfd1e147c4c53fc3bee9"},
    {url:"ios/256.png",revision:"5d615bf008379f55c69e634045093afe"},
    {url:"ios/29.png",revision:"fda9945050b53f82f6acfb25a62c11a2"},
    {url:"ios/32.png",revision:"226e4e4383f09e3b83545947905c021f"},
    {url:"ios/40.png",revision:"b522768e01ae91ea616f3616d7d0818a"},
    {url:"ios/50.png",revision:"a5f107e466c11a9b5df06d6bb881ce16"},
    {url:"ios/512.png",revision:"5a6db560424f82da6f4f76955410f695"},
    {url:"ios/57.png",revision:"d9fbf61e815886206cf9f559ed4e6c9c"},
    {url:"ios/58.png",revision:"89811923f2ed900b6ea13bb58bc8aa02"},
    {url:"ios/60.png",revision:"6037b0a6fc97b52a3df6fe6fbc094595"},
    {url:"ios/64.png",revision:"3c80832912f293a171371a92e6ad48b0"},
    {url:"ios/72.png",revision:"8c44db82568c33c83566153dd73126da"},
    {url:"ios/76.png",revision:"66dd3977e2f0c61c98fa168cca63c089"},
    {url:"ios/80.png",revision:"5a20270cc77aace0ea6e1f36cce9172c"},
    {url:"ios/87.png",revision:"96150a4703360d1a9d4eef3f40986fea"},
    {url:"main.ce1332144e916e502b00.js",revision:null},
    {url:"main.ce1332144e916e502b00.js.LICENSE.txt",revision:"b8081f9a817951268464eb92c620843d"},
    {url:"main.css",revision:"cd0c9ef1d750a1fbe42888ff3687a1b1"},
    {url:"manifest.json",revision:"c34b74bd7fc93bde01d84d08610c5c71"},
    {url:"oculus_quest_controllers.fbx",revision:"e712c033931910e086516e7f9fd529d7"},
    {url:"fa-regular-400.woff2",revision:"8b13141deffa0a1d715d14a470aea6de"},
    {url:"fa-solid-900.woff2",revision:"a265bbc20e40ae6e6b45e0b78ab08c41"},
    {url:"src/assets/audio/error_sound.mp3",revision:"ad25bf8234af9536ac81fa66f8db8953"},
    {url:"src/assets/audio/female_hello_1.mp3",revision:"dfe2b6e2d74c0eb117167080b4e88a8c"},
    {url:"src/assets/audio/female_hello_2.mp3",revision:"1702c759b39ad2bd7460ce353fb5989f"},
    {url:"src/assets/audio/inbox_sound.mp3",revision:"db0cc1a149b0a6f3d1074b6add17c38c"},
    {url:"src/assets/audio/male_hello_1.mp3",revision:"8a50bcbbd2bde246ec5765dabc72917e"},
    {url:"src/assets/audio/male_hello_2.mp3",revision:"369234af0ab094fb04bc386dbe2cdbbe"},
    {url:"src/assets/audio/music.mp3",revision:"12e17fe48228e27b97a868d3e4ab920e"},
    {url:"src/assets/audio/phone.mp3",revision:"0eac930bea6b7cc1647941c0b1196ef4"},
    {url:"src/assets/audio/success.mp3",revision:"3e225195c4f5bfa70ef47a21148f6840"},
    {url:"src/assets/fonts/PTSans-Bold.ttf",revision:"7ce12caf9c41197f791da7e40970a69c"},
    {url:"src/assets/fonts/PTSans-Regular.ttf",revision:"5b127e9e1cedad57860a5bb8b2cc9d61"},
    {url:"src/assets/fonts/Rubik-Medium.ttf",revision:"2566a5dd3dbaf337b9928fdf48c2d030"},
    {url:"src/assets/fonts/Rubik-Regular.ttf",revision:"35c2b913e9977fe4a3d4327824fbaf35"},
    {url:"src/assets/fonts/Rubik-SemiBold.ttf",revision:"b87ea1ca8149bd479456eb6104aef078"},
    {url:"src/assets/fonts/inter/Inter_18pt-Bold.ttf",revision:"7ef6f6d68c7fedc103180f2254985e8c"},
    {url:"src/assets/fonts/inter/Inter_18pt-ExtraBold.ttf",revision:"a6ed481bff60bc9270904d214947ab13"},
    {url:"src/assets/fonts/inter/Inter_18pt-ExtraLight.ttf",revision:"2c6c78d98816958b53fea58451f921d3"},
    {url:"src/assets/fonts/inter/Inter_18pt-Light.ttf",revision:"dfaec8b8820224135d07f1b409ceb214"},
    {url:"src/assets/fonts/inter/Inter_18pt-Medium.ttf",revision:"8540f35bf8acd509b9ce356f1111e983"},
    {url:"src/assets/fonts/inter/Inter_18pt-Regular.ttf",revision:"37dcabff629c3690303739be2e0b3524"},
    {url:"src/assets/fonts/inter/Inter_18pt-SemiBold.ttf",revision:"e5532d993e2de30fa92422df0a8849dd"},
    {url:"src/assets/fonts/inter/Inter_18pt-Thin.ttf",revision:"6f2d2f41f504aee66da88684f15d7e1d"},
    {url:"src/assets/models/female_walk_2.fbx",revision:"bbe92c08faf1ddda1d09e0093b7e4e59"},
    {url:"src/assets/models/female_walk_animation.fbx",revision:"d83dfb14d3f87b9e753d9c70efcb016e"},
    {url:"src/assets/models/hotel/bar.fbx",revision:"6815713d53ef247960ceebaa71e75daf"},
    {url:"src/assets/models/hotel/counter.fbx",revision:"a21b0d42690355065012c8588c7b08f8"},
    {url:"src/assets/models/hotel/lobby_cut.fbx",revision:"ed057be148063fb33a021bbc9c3e564e"},
    {url:"src/assets/models/male_walk_1.fbx",revision:"baf302b44d35f4735beb7191255e1615"},
    {url:"src/assets/textures/city_jpg/nx.jpg",revision:"284761810338fd68010e3be6b0e17324"},
    {url:"src/assets/textures/city_jpg/ny.jpg",revision:"e86ab1ff76a743de170011efbb7bda2b"},
    {url:"src/assets/textures/city_jpg/nz.jpg",revision:"a8d8762cb057d84bfd04739d0a24618f"},
    {url:"src/assets/textures/city_jpg/px.jpg",revision:"7df2b8d2b00188d4622d0d1f68c69419"},
    {url:"src/assets/textures/city_jpg/py.jpg",revision:"15052fc3a487bd4f9cd51090fa1521ae"},
    {url:"src/assets/textures/city_jpg/pz.jpg",revision:"eb5ab5824f224a306c4287209891cb1a"},
    {url:"src/assets/textures/hotel/photo_1.jpg",revision:"ab2f0f294a05287638847108a8bce70b"},
    {url:"src/assets/textures/hotel/photo_2.jpg",revision:"204f78670e826a70c0fe5153fa2e647f"},
    {url:"src/assets/textures/hotel/white_sandstone_blocks_02_diffuse.jpg",revision:"30edcfd2b8e6ab370a61f874efc0f9b1"},
    {url:"src/assets/textures/hotel/wood_002.jpg",revision:"833354682164417d3c2eadfa209a08f0"},
    {url:"src/assets/textures/hotle_royal.png",revision:"0711d1c8e78db9fd27b821793a1223a1"},
    {url:"src/assets/textures/icons/check.png",revision:"39c4d535a144b44a0024c57cface1409"},
    {url:"src/assets/walking_maps/city.png",revision:"c5f0ee37779d1663c98e888d6d5d2e7b"},
    {url:"src/ts/g.frame.modules/hands_view/assets/left_metallic.png",revision:"9b417d7c8a8ab13ae9996f6990e17044"},
    {url:"src/ts/g.frame.modules/hands_view/assets/left_quest_hand.fbx",revision:"4a4a04f919dfeaabf532761836b66880"},
    {url:"src/ts/g.frame.modules/hands_view/assets/left_roughness.png",revision:"5399a04a23e7b98b522b7c1ccff2edc4"},
    {url:"src/ts/g.frame.modules/instruments_pack/assets/instruments/tablet/tablet.fbx",revision:"a14a970fcb8af3286aa4961c1fc3bd66"},
    {url:"src/ts/g.frame.modules/instruments_pack/assets/instruments/tablet/textures/tablet_bc.jpg",revision:"f2888001ec2bfc8226781125ef2981fa"},
    {url:"src/ts/g.frame.modules/instruments_pack/assets/instruments/tablet/textures/tablet_orm.png",revision:"f5071cd50863f6c16113491b22ea4128"},
    {url:"windows11/LargeTile.scale-100.png",revision:"1c1b88832af37bebdaaec94742e31600"},
    {url:"windows11/LargeTile.scale-125.png",revision:"1fad67fcab97bed2132debac2f1ca667"},
    {url:"windows11/LargeTile.scale-150.png",revision:"45b8c43547539db877e5c3e0fabe825a"},
    {url:"windows11/LargeTile.scale-200.png",revision:"5c4308d12f9793c211119a32687ef768"},
    {url:"windows11/LargeTile.scale-400.png",revision:"91be8bb83543a910a19bbc52f6805bfc"},
    {url:"windows11/SmallTile.scale-100.png",revision:"adb7f2fe62f86d442e60df9ef5a772e9"},
    {url:"windows11/SmallTile.scale-125.png",revision:"9ef6f38d5072d0e9c138a2aaea4c9584"},
    {url:"windows11/SmallTile.scale-150.png",revision:"10c1f5d04a2e26b427cd9949677d7fd1"},
    {url:"windows11/SmallTile.scale-200.png",revision:"26ad70e9413c97b6d3ef54790094d8d3"},
    {url:"windows11/SmallTile.scale-400.png",revision:"134d25b9926cb34e6a285fe0c666a497"},
    {url:"windows11/SplashScreen.scale-100.png",revision:"43384c2c0372e2d6a092bc607713343b"},
    {url:"windows11/SplashScreen.scale-125.png",revision:"93081c36ab8aae35a3717a4f2aa9c491"},
    {url:"windows11/SplashScreen.scale-150.png",revision:"55580d51acc0cce6c0d78b6dcc35c302"},
    {url:"windows11/SplashScreen.scale-200.png",revision:"92d234eccc9cea6c39dbd4c6ffb7213c"},
    {url:"windows11/SplashScreen.scale-400.png",revision:"3c8719e98a9386cac7a72677d40fe6ee"},
    {url:"windows11/Square150x150Logo.scale-100.png",revision:"caa12fde4b69d765b7e12701362fb847"},
    {url:"windows11/Square150x150Logo.scale-125.png",revision:"4488513869fe0d06042e9e79caf83a8d"},
    {url:"windows11/Square150x150Logo.scale-150.png",revision:"179d995641b854b6c7b316c4443321d0"},
    {url:"windows11/Square150x150Logo.scale-200.png",revision:"1f9310233b13f0ab91a1eabb58a07d91"},
    {url:"windows11/Square150x150Logo.scale-400.png",revision:"17b34ce2b57250c447cd5e31c1fcc52a"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"0ccee6d6be8206ec431be3b370af63e5"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"455fc1708348d010e3daa832154b0e56"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"889e8e7487c267257e860db49d7190b3"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d3ebc8ba2b90a9a0e4327c50c2219344"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"c4b37dabf666acc32c19a1d3ee8be508"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"ce474f9c6e6e7ab6aa5d14429720f386"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"1e01737e9110935852d03c3fbe5202a7"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"f7a12ee5bfc36b0e60fb558c5ee51e7f"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"1a8d5ccf0a7fd6ce28a3bbd0bd0ebbb5"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"9230ebf31f6164852786001ec13c2ad0"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"2191723c8cab6bb863ec68659eba30cc"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"8c4aabe956da5d235b417ecd3b2c57e0"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"3fb34a521fc7907938b34e0e20f41e05"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"f2c25ac5e20d28599cceade3a538da7b"},
    {url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"3ee4cc9f1369e7dfaf4ba7a3a887a281"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"0ccee6d6be8206ec431be3b370af63e5"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"455fc1708348d010e3daa832154b0e56"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"889e8e7487c267257e860db49d7190b3"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d3ebc8ba2b90a9a0e4327c50c2219344"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"c4b37dabf666acc32c19a1d3ee8be508"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"ce474f9c6e6e7ab6aa5d14429720f386"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"1e01737e9110935852d03c3fbe5202a7"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"f7a12ee5bfc36b0e60fb558c5ee51e7f"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"1a8d5ccf0a7fd6ce28a3bbd0bd0ebbb5"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"9230ebf31f6164852786001ec13c2ad0"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"2191723c8cab6bb863ec68659eba30cc"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"8c4aabe956da5d235b417ecd3b2c57e0"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"3fb34a521fc7907938b34e0e20f41e05"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"f2c25ac5e20d28599cceade3a538da7b"},
    {url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"3ee4cc9f1369e7dfaf4ba7a3a887a281"},
    {url:"windows11/Square44x44Logo.scale-100.png",revision:"1a8d5ccf0a7fd6ce28a3bbd0bd0ebbb5"},
    {url:"windows11/Square44x44Logo.scale-125.png",revision:"36ac6e7468a778f007ecd45e805b56b6"},
    {url:"windows11/Square44x44Logo.scale-150.png",revision:"2f79505d67a6560f0f0798e7a73b790c"},
    {url:"windows11/Square44x44Logo.scale-200.png",revision:"6716fff5d329fd0744bdf81ccea0e5b9"},
    {url:"windows11/Square44x44Logo.scale-400.png",revision:"f3c524bc8ff1c1d327f5133cc5d99da1"},
    {url:"windows11/Square44x44Logo.targetsize-16.png",revision:"0ccee6d6be8206ec431be3b370af63e5"},
    {url:"windows11/Square44x44Logo.targetsize-20.png",revision:"455fc1708348d010e3daa832154b0e56"},
    {url:"windows11/Square44x44Logo.targetsize-24.png",revision:"889e8e7487c267257e860db49d7190b3"},
    {url:"windows11/Square44x44Logo.targetsize-256.png",revision:"d3ebc8ba2b90a9a0e4327c50c2219344"},
    {url:"windows11/Square44x44Logo.targetsize-30.png",revision:"c4b37dabf666acc32c19a1d3ee8be508"},
    {url:"windows11/Square44x44Logo.targetsize-32.png",revision:"ce474f9c6e6e7ab6aa5d14429720f386"},
    {url:"windows11/Square44x44Logo.targetsize-36.png",revision:"1e01737e9110935852d03c3fbe5202a7"},
    {url:"windows11/Square44x44Logo.targetsize-40.png",revision:"f7a12ee5bfc36b0e60fb558c5ee51e7f"},
    {url:"windows11/Square44x44Logo.targetsize-44.png",revision:"1a8d5ccf0a7fd6ce28a3bbd0bd0ebbb5"},
    {url:"windows11/Square44x44Logo.targetsize-48.png",revision:"9230ebf31f6164852786001ec13c2ad0"},
    {url:"windows11/Square44x44Logo.targetsize-60.png",revision:"2191723c8cab6bb863ec68659eba30cc"},
    {url:"windows11/Square44x44Logo.targetsize-64.png",revision:"8c4aabe956da5d235b417ecd3b2c57e0"},
    {url:"windows11/Square44x44Logo.targetsize-72.png",revision:"3fb34a521fc7907938b34e0e20f41e05"},
    {url:"windows11/Square44x44Logo.targetsize-80.png",revision:"f2c25ac5e20d28599cceade3a538da7b"},
    {url:"windows11/Square44x44Logo.targetsize-96.png",revision:"3ee4cc9f1369e7dfaf4ba7a3a887a281"},
    {url:"windows11/StoreLogo.scale-100.png",revision:"a5f107e466c11a9b5df06d6bb881ce16"},
    {url:"windows11/StoreLogo.scale-125.png",revision:"021a6cd8df677519430541cbc80120b1"},
    {url:"windows11/StoreLogo.scale-150.png",revision:"7e8f838abeee02cbac1bfac06b7abd84"},
    {url:"windows11/StoreLogo.scale-200.png",revision:"f7e44d3f63570d6c5e04a5ead71f63b2"},
    {url:"windows11/StoreLogo.scale-400.png",revision:"66abfa216cb514f1b5d4a823932361c0"},
    {url:"windows11/Wide310x150Logo.scale-100.png",revision:"78013cb3295bd4381150fd5497f9b36b"},
    {url:"windows11/Wide310x150Logo.scale-125.png",revision:"2f5d4984f3d8fcb72b1fb14edba4747d"},
    {url:"windows11/Wide310x150Logo.scale-150.png",revision:"8c6b77b0816ece5d9984213fe4bc3273"},
    {url:"windows11/Wide310x150Logo.scale-200.png",revision:"43384c2c0372e2d6a092bc607713343b"},
    {url:"windows11/Wide310x150Logo.scale-400.png",revision:"92d234eccc9cea6c39dbd4c6ffb7213c"}],{})}));
//# sourceMappingURL=service-worker.js.map
