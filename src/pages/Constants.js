//path='/' component={Bt} exact


export const paths = [
    {
        id:1,
        path: "/",
        component: "Home",
        title: "Home  |"
    },
    {
        id:2,
        path: "/checkData",
        component: "CheckData",
        title: "ServerData  |"

    },
    {
        id:3,
        path: "/slider",
        component: "Slider",
        title: "Album  |"

    },
    {
        id:4,
        path: "/mySlider",
        component: "CarouselPage",
        title: "myAlbum  "

    },
    {
        id:5,
        path: "/error",
        component: "NotFound",
        title: "Error"

    }
];

export const images = [
    {
        id: 1,
        src: "../assets/1.jpg",
        alt: " 1 ",
    },
    {
        id: 2,
        src: "../assets/2.jpg",
        alt: " 2 "
    },
    {
        id: 3,
        src: "../assets/3.jpg",
        alt: " 3 "
    }
]