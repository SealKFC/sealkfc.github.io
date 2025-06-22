// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-music",
          title: "music",
          description: "My music portfolio.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
          },
        },{id: "nav-experience",
          title: "experience",
          description: "My work experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-officially-started-working-on-your-remote-arm",
          title: 'Officially started working on Your Remote Arm!',
          description: "",
          section: "News",},{id: "news-held-the-first-meeting-with-all-the-members-in-your-remote-arm",
          title: 'Held the first meeting with all the members in Your Remote Arm',
          description: "",
          section: "News",},{id: "projects-example",
          title: 'Example',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-get-swole",
          title: 'Get Swole',
          description: "BC Hacks 6 Submission",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Get_Swole/";
            },},{id: "projects-image-classification",
          title: 'Image Classification',
          description: "Transfer Learning with ResNet50",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Image_Classification/";
            },},{id: "projects-inspirit-summer-program",
          title: 'Inspirit Summer Program',
          description: "NLP + Finance Algorithmic Trading",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Inspirit/";
            },},{id: "projects-stock-market-prediction",
          title: 'Stock Market Prediction',
          description: "Project Final submission",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Stock_Market_Prediction/";
            },},{id: "projects-video-denoising",
          title: 'Video Denoising',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Video_Denoising/";
            },},{id: "projects-your-remote-arm",
          title: 'Your Remote Arm',
          description: "Research project, summer 2025. Still in research phase.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Your_Remote_Arm/";
            },},{id: "projects-a-cruel-angel-39-s-thesis",
          title: 'A Cruel Angel&amp;#39;s Thesis',
          description: "Adaption by Hidetoshi Sato",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cruel_angel/";
            },},{id: "projects-gurenge",
          title: 'Gurenge',
          description: "LISA, Adaption by Kim Taemyeong",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gurenge/";
            },},{id: "projects-la-campanella",
          title: 'La Campanella',
          description: "Paganini, Liszt",
          section: "Projects",handler: () => {
              window.location.href = "/projects/la_campanella/";
            },},{id: "projects-next-to-you",
          title: 'Next to You',
          description: "Adaption by Theister",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nexttoyou/";
            },},{id: "projects-river-flows-in-you",
          title: 'River Flows in You',
          description: "YIRUMA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/river/";
            },},{id: "projects-unravel",
          title: 'Unravel',
          description: "Adaption by Animenz",
          section: "Projects",handler: () => {
              window.location.href = "/projects/unravel/";
            },},{id: "recentprojects-officially-started-working-on-your-remote-arm",
          title: 'Officially started working on Your Remote Arm!',
          description: "",
          section: "Recentprojects",},{id: "recentprojects-began-working-on-developing-a-tycoon-in-roblox-studios-luau-programming-language",
          title: 'Began working on developing a tycoon in Roblox Studios (luau programming language)',
          description: "",
          section: "Recentprojects",},{id: "recentprojects-researching-how-to-automate-your-remote-arm",
          title: 'Researching how to automate Your Remote Arm',
          description: "",
          section: "Recentprojects",},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/451594180687429632", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%68%69%6D%61%61%72%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/s3al.r", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aaron-rhim-532604191", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://arrc.ca/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
