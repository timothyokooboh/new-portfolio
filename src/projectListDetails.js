export const projectListDetails = [
    {
        id: 1,
        projectName: "PEP Exams",
        projectDescription: `PEP Exams is a quiz application I built for Nigerian Pharmacists. 
        It contains past questions, answers and downloadable study resources required to prepare for the 
        professional licensing examination.`,
        projectPurpose: `I built this project because I like to solve real world problems
        with my code.
        By the way, I am also a Pharmacist 😇. So I saw it as an opportunity to give back to the pharmacy profession.
        It was also an opportunity to practice the things I have learned in Nuxt.js. So this was the first project I built with Nuxt.js`,
        projectStack: "Nuxt.js, Node/Express.js, MongoDB",
        challenges: `
            One of the challenges I faced was how to store and persist sensitive user's data without utilizing web storage e.g local storage.
            For example, I wanted to store data regarding whether a user has made payment or not. I knew that if I saved that information in web storage,
            the data could be manipulated by users. To solve that challenge, I leveraged the "nuxtServerInit" action 
            provided by Nuxt.js. So just before the client side is rendered to authenticated users, I retrieve the
            user's unique ID (provided by mongoDB) from cookies. Then I call a function that fetches the user's information from the server and 
            use the returned data to initialize Vuex store.
            That way, I only needed to store the user's ID in cookies and be rest assured that on page refresh, I will always retrieve
            the user's data from the server via server side rendering.
        `,
        lessonsLearned: `
            I learned how to extend my knowledge of Vue.js to 
            build server side rendered apps with Nuxt.js.
        `,
        images: ["pep1.png", "pep2.png", "pep3.png"],
        projectUrl: "https://pepexam.herokuapp.com/",
    },

    {
        id: 2,
        projectName: "MyFastMeds",
        projectDescription: `MyFastMeds is an E-Pharmacy application currently in development.
        It has an e-commerce feature that allows users to add medicines to cart, update the quantity of items and checkout
        to make payment.
        There is an online consultation feature in which patients can have consultation sessions with
        health care professionals via chat or video. I started the project with Nuxt.js. But I'm currently migrating the 
        codebase to Quasar so that I can deploy it on Android, IOS and the web.
        `,
        projectPurpose: `The purpose of this project is to put into practice the lessons I have learned regarding webRTC and Node.js
        Once again, I like to solve real world problems with code. And this project affords me that privilege`,
        projectStack: "Nuxt.js, Quasar, Node/Express.js, MongoDB, Socket.io",
        
        challenges: `
            Because this is a real world application and not a demo application with e-commerce feature, I wanted
            to avoid a situation whereby users could manipulate cart specific data such as the price of items.
            Therefore, I decided to not save information regarding the cart to local storage. Instead, I created
            a cart model on the server side which allowed me to store and retrieve details regarding a user's cart.
            One downside to this approach was that users can only add an item to cart or view saved items in cart only when they
            are logged in.
            I maintained this approach because it helped to solve the problem I was avoiding. Moreover, users would still need
            to login before they can checkout and make payment.
        
        `,
        lessonsLearned: `
            I learned about the user journey in building an e-commerce feature. I also found
            a way to solve a major security loop-hole found in some e-commerce applications where 
            users could manipulate data in web storage and checkout to pay less the amount they are supposed 
            to pay.
        `,
        images: ["myfastmeds-1.png", "myfastmeds-2.png", "myfastmeds-3.png"],
        projectUrl: "https://myfastmeds.herokuapp.com/",
    },

    {
        id: 3,
        projectName: "Covid-19 Dashboard",
        projectDescription: `A Covid-19 dashboard that displays statistics of cases and deaths 
        across different nations. I used open source data made available by JohnsHopkins University and the WHO.
        I used Chart.js to display the data in form of bar charts.
        `,
        projectStack: "Vue.js, Chart.js",
        projectPurpose: `
            The purpose of this project was to put into practice the things I had learned about Vue.js such as how to
            consume APIs.
        `,
        challenges: `
           It was challenging to incorporate Chart.js and display the data in form of
           bar charts. Also, this was my first Vue.js application, so the concept of building reusable
           components was not very clear to me.
        `,
        lessonsLearned: `
            I learned how to integrate Chart.js into a Vue.js application.
            I applied Vue's reactivity system to dynamically update the bar charts each time
            new data was rendered to the client
        `,
        images: ["covid-1.png", "covid-2.png", "covid-3.png"],
        projectUrl: "https://timothyokooboh.github.io/#/",
    },

    {
        id: 4,
        projectName: "English Dictionary",
        projectDescription: `An English dictionary application with text to speech functionality.
            I consumed data from owlbot.js API and used the native web's speech synthesis API to
            pronounce the words.
        `,
        projectPurpose: `
            The purpose of this project was to put into practice the things I had learned about Vue.js.
            I also wanted to learn how to use the speech synthesis API
        `,
        projectStack: "Vue.js.js, Speech Synthesis API",
        challenges: `
           There was no major challenge while building this application.
           The MDN documentation regarding speech synthesis API is well documented
        
        `,
        lessonsLearned: `
            I learned how to use the native web's speech synthesis API to
            include "text to speech" functionality in my web applications,
        `,
        images: ["dictionary-1.png", "dictionary-2.png", "dictionary-3.png"],
        projectUrl: "https://timothyokooboh.github.io/dictionary/#/",
    }
]
