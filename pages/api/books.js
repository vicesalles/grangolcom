// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default(req, res) => {
    res
        .status(200)
        .json([{
            slug:"hackers",
            url: "https://amzn.to/3B9DQ67",
            title: "Football Hackers: The Science and Art of a Data Revolution",
            author: "Christoph Biermann",
            description: "Football hackers is a great introductory book to the role that data plays in the nowadays football. In this book, the german journalist, Christoph Bierman introduces key concepts such as 'Expected Goals' or 'Packing', among others, and narrates his encounters with some of the most prominent trailblazers in the matter: The introduction of the data-driven approach to the elite football. This book is a first step towards understanding our beloved game in the current times.",
            cover: "https://images-na.ssl-images-amazon.com/images/I/41uA7e3BXnL._SX323_BO1,204,203," +
                    "200_.jpg"
        },{
            slug:"xGphilo",
            url: "https://amzn.to/3DfcbmK",
            title:"The Expected Goals Philosophy",
            author: "James Tippet",
            description: "If you manage to go beyond the first 50 pages of the book, are filled with terrible arrogancy and ditching towards the old times football 'ignorants and fools', you'll find a quite a good explanation of the Expected Goals metric. From its origins to its most common graphic representations, going through its applications and some interesting examples. This book gives you a good idea about why Expected Goals is such an interesting way of reading football matches.",
            cover: "https://images-na.ssl-images-amazon.com/images/I/41--ExlakmL._SX326_BO1,204,203,200_.jpg"
        },{
            slug:"intensity",
            url: "https://amzn.to/49hbtlp",
            title:"Intensity: Inside Liverpool FC",
            author: "Pep Lijnders",
            description: "A privileged view from the very inside of the Liverpool's season 2020/2021. That season Liverpool make it to the Champions League final and got the Premier League second position. The Klopp's assistant coach Pep Lijnders takes you to a season lenght journey.",
            cover: "https://m.media-amazon.com/images/I/81a0nEWAfoL._SY466_.jpg"
        },{
            slug:"mixer",
            url: "https://amzn.to/3ZdEyNe",
            title:"The Mixer",
            author: "Michael Cox",
            description: "An insightful exploration of the evolution of tactical approaches in the Premier League, tracing its transformation from the early days of direct, route-one football to the modern era of sophisticated strategies such as false nines, and examining how key managers, players, and innovations have shaped the league's tactical landscape over the years.",
            cover: "https://m.media-amazon.com/images/I/71RSsi6V3fL._SY466_.jpg"
        }])
}


/*
   slug: "",
            url: "",
            title:"",
            author: "",
            description: "",
            cover: ""
*/