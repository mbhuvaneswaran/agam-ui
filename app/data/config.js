const config = {
    headers : [
        {
            title : 'About the band',
            url:'/aboutband',
            component: 'AboutBandComponent'
        },{
            title : 'About the album',
            url:'/aboutalbum',
            component: 'AboutAlbumComponent'
        },{
            title : 'Songs',
            url:'/songs',
            component: 'SongsComponent'
        },{
            title : 'Gallery',
            url:'/gallery',
            component: 'GalleryComponent'
        },{
            title : 'Shop',
            url:'/shop',
            component: 'ShopComponent'
        },{
            title : 'Contact',
            url:'/contact',
            component: 'ContactComponent'
        }
    ]
}
export default config;