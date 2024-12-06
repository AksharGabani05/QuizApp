const mockQuizzes = [
  {   
    id: 1, 
    title: 'HTML', 
    description: 'HTML is a markup language, not a programming language, meaning it annotates text to define how it is structured and displayed by web browsers.It forms the building blocks of all websites and is complemented by CSS for style and JavaScript for interactivity.',
    image: 'https://e0.pxfuel.com/wallpapers/438/587/desktop-wallpaper-programming-for-html-html-5.jpg'
  },
  { 
    id: 2, 
    title: 'Css', 
    description: 'CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets',
    image: 'https://as2.ftcdn.net/v2/jpg/04/27/81/27/1000_F_427812786_FyUxiPBaVCSbZP7AIWAegFkSt00AcE0h.jpg'
  },
  { 
    id: 3, 
    title: 'Bootstrap', 
    description: 'Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_t3ncvKT2zF2Mfs5CO1wn0r2kvB_PFf18amtjk2USxQDTHQL85xkPVvXTYhLrA97B7dkJ8Bc_slk6XZCvh5SFtFaVjB6T7WSeWCOHZvZceCK5ukKDaMCYcm6XMSADJgqL16k9kGL9e1VJPh_vwLcmdVkuM4qU54HR-_pGvbVPELyeMy7rjIIsEw0hDA/s1171/boot.png' 
  },
  { 
    id: 4, 
    title: 'Tailwind', 
    description: 'Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.',
    image: 'https://leed.ai/cdn-cgi/imagedelivery/CkSmQAGqpZ-mcWDDI6mu0w/f924ccd9-3bc7-4dae-205a-56126f862000/original' 
  },
  { 
    id: 5, 
    title: 'jQuery', 
    description: 'jQuery is an open-sourced JavaScript library that simplifies creation and navigation of web applications. Specifically, jQuery simplifies HTML Document Object Model (DOM) manipulation, Asynchronous JavaScript and XML (Ajax) and event handling.',
    image: 'https://t4.ftcdn.net/jpg/04/02/38/99/360_F_402389993_dvqXfnQ9zDRZWzLA2vwmH5dWFuRJIi1l.jpg' 
  },
  { 
    id: 6, 
    title: 'JavaScript',
    description: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, ...',
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1024,q_auto' 
  },
  {
    id: 7,
    title: 'React',
    description: 'React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.',
    image: 'https://kinsta.com/wp-content/uploads/2023/04/react-homepage.png'
  },
  {
    id: 8,
    title: 'NodeJs',
    description: 'js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.',
    image: 'https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2023-01/Nodejs.png'
  }
];

  
  const mockQuizDetails = [
    {
      id: 1,
      title: 'HTML',
      description: 'Test your general knowledge!',
      questions: [
        {
          id: 1,
          text: 'What does HTML stand for?',
          options: [
            'Hyperlinks and Text Markup Language',
            'Hyper Text Markup Language',
            'Home Tool Markup Language',
            'Hyper Transfer Markup Language',
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          text: 'Which HTML tag is used to define a paragraph?',
          options: ['<par>', '<p>', '<pg>', '<paragraph>'],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: 'Which attribute is used to specify the URL of a link?',
          options: ['src', 'href', 'link', 'url'],
          correctAnswer: 1,
        },
        {
          id: 4,
          text: 'Which tag is used to display an image in HTML?',
          options: ['<image>', '<img>', '<src>', '<picture>'],
          correctAnswer: 1,
        },
        {
          id: 5,
          text: 'What is the correct HTML tag for the largest heading?',
          options: ['<h6>', '<heading>', '<h1>', '<head>'],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 2,
      title: 'CSS Quiz',
      description: 'Explore the world of CSS!',
      questions: [
        {
          id: 1,
          text: 'What does CSS stand for?',
          options: [
            'Cascading Style Sheets',
            'Creative Style System',
            'Computer Style Sheet',
            'Cascading Simple Sheets',
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          text: 'Which property is used to change the background color in CSS?',
          options: ['color', 'background-color', 'bg-color', 'back-color'],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: 'Which CSS property controls the text size?',
          options: ['font-style', 'font-size', 'text-size', 'text-style'],
          correctAnswer: 1,
        },
        {
          id: 4,
          text: 'How do you add a border to an element in CSS?',
          options: [
            'border: 1px solid black;',
            'border-width: 1px;',
            'outline: 1px solid black;',
            'border-style: solid;',
          ],
          correctAnswer: 0,
        },
        {
          id: 5,
          text: 'Which CSS property is used to make the text bold?',
          options: ['font-style', 'font-weight', 'text-bold', 'font-bold'],
          correctAnswer: 1,
        },
      ],
    },
    
    {
      id: 3,
      title: 'Bootstrap Quiz',
      description: 'Test your knowledge of Bootstrap!',
      questions: [
        {
          id: 1,
          text: 'What is the default grid system in Bootstrap?',
          options: [
            '12-column grid',
            '10-column grid',
            '8-column grid',
            '16-column grid',
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          text: 'Which class is used to create a container in Bootstrap?',
          options: ['.container', '.box', '.wrapper', '.content'],
          correctAnswer: 0,
        },
        {
          id: 3,
          text: 'Which class is used to make text bold in Bootstrap?',
          options: ['.text-bold', '.font-weight-bold', '.font-bold', '.text-heavy'],
          correctAnswer: 1,
        },
        {
          id: 4,
          text: 'How do you add a button with a primary color in Bootstrap?',
          options: [
            'btn-primary',
            'btn-default',
            'btn-main',
            'btn-style',
          ],
          correctAnswer: 0,
        },
        {
          id: 5,
          text: 'Which class is used to center content horizontally in Bootstrap?',
          options: [
            '.text-center',
            '.content-center',
            '.align-center',
            '.justify-center',
          ],
          correctAnswer: 0,
        },
      ],
    },
    
    {
      id: 4,
      title: 'Tailwind CSS Quiz',
      description: 'How well do you know Tailwind CSS?',
      questions: [
        {
          id: 1,
          text: 'What is the default spacing unit in Tailwind CSS?',
          options: [
            '4px',
            '8px',
            '16px',
            '1rem',
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: 'Which class is used to set a background color in Tailwind CSS?',
          options: ['bg-color', 'bg-primary', 'bg-{color}', 'bg-blue'],
          correctAnswer: 2,
        },
        {
          id: 3,
          text: 'Which Tailwind class is used to make text bold?',
          options: ['text-bold', 'font-bold', 'text-weight-bold', 'text-strict'],
          correctAnswer: 1,
        },
        {
          id: 4,
          text: 'What class is used to add padding in Tailwind CSS?',
          options: [
            'p-{size}',
            'm-{size}',
            'padding-{size}',
            'space-{size}',
          ],
          correctAnswer: 0,
        },
        {
          id: 5,
          text: 'Which class is used to hide an element in Tailwind CSS?',
          options: [
            'hide',
            'hidden',
            'display-none',
            'invisible',
          ],
          correctAnswer: 1,
        },
      ],
    },    
    {
      id: 5,
      title: 'jQuery Quiz',
      description: 'Test your knowledge of jQuery!',
      questions: [
        {
          id: 1,
          text: 'Which method in jQuery is used to hide selected elements?',
          options: [
            '$.hide()',
            'hide()',
            '$(selector).hide()',
            'selector.hide()',
          ],
          correctAnswer: 2,
        },
        {
          id: 2,
          text: 'Which jQuery method is used to add a class to an element?',
          options: [
            'addClass()',
            'classAdd()',
            'addClassTo()',
            'add()',
          ],
          correctAnswer: 0,
        },
        {
          id: 3,
          text: 'How do you select all paragraphs on a page using jQuery?',
          options: [
            '$("p")',
            '$p',
            '.p',
            '$(p)',
          ],
          correctAnswer: 0,
        },
        {
          id: 4,
          text: 'Which of the following jQuery methods is used to get the value of an input field?',
          options: [
            'value()',
            'val()',
            'getValue()',
            'inputValue()',
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          text: 'How can you prevent the default action of an event in jQuery?',
          options: [
            'event.preventDefault()',
            'preventDefault()',
            'cancelDefault()',
            'stopDefault()',
          ],
          correctAnswer: 0,
        },
      ],
    },    
    {
      id: 6,
      title: 'JavaScript Quiz',
      description: 'Test your knowledge of JavaScript, the programming language of the web! From fundamentals to advanced concepts, this quiz will challenge your JS skills.',
      image: 'https://images.pexels.com/photos/17767272/pexels-photo-17767272/free-photo-of-man-holding-hands-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600',
      questions: [
        {
          id: 1,
          text: 'Which of the following is used to declare a variable in JavaScript?',
          options: ['let', 'var', 'const', 'All of the above'],
          correctAnswer: 3,
        },
        {
          id: 2,
          text: 'What does the "this" keyword refer to in JavaScript?',
          options: [
            'The current function',
            'The global object',
            'The object that the function is a method of',
            'The parent function'
          ],
          correctAnswer: 2,
        },
        {
          id: 3,
          text: 'Which of the following is NOT a valid JavaScript data type?',
          options: ['String', 'Number', 'Character', 'Boolean'],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: 'How do you create a function in JavaScript?',
          options: [
            'function myFunction() {}',
            'create function myFunction() {}',
            'function = myFunction() {}',
            'def myFunction() {}'
          ],
          correctAnswer: 0,
        },
        {
          id: 5,
          text: 'What is the output of the following code: console.log(2 + "2")?',
          options: ['4', '22', 'NaN', 'Error'],
          correctAnswer: 1,
        },
      ],
    },    
    {
      id: 7,
      title: 'React Knowledge Quiz',
      description: 'Test your knowledge of React! From basic concepts to advanced features, this quiz will challenge your understanding of the popular JavaScript library.',
      image: 'https://images.pexels.com/photos/5095298/pexels-photo-5095298.jpeg?auto=compress&cs=tinysrgb&w=600',
      questions: [
        {
          id: 1,
          text: 'What is JSX in React?',
          options: [
            'JavaScript XML syntax extension',
            'JavaScript Extended Syntax',
            'JavaScript Object Syntax',
            'JavaScript X-Syntax'
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          text: 'Which of the following is used to manage component state in React?',
          options: ['useState', 'componentState', 'setState', 'stateManager'],
          correctAnswer: 0,
        },
        {
          id: 3,
          text: 'Which lifecycle method is called when a component is removed from the DOM?',
          options: ['componentDidMount', 'componentWillUnmount', 'componentDidUpdate', 'shouldComponentUpdate'],
          correctAnswer: 1,
        },
        {
          id: 4,
          text: 'What is the main purpose of React Router?',
          options: [
            'For routing HTTP requests',
            'For managing state of components',
            'For handling navigation between views',
            'For managing component rendering'
          ],
          correctAnswer: 2,
        },
        {
          id: 5,
          text: 'Which hook is used to perform side effects in React components?',
          options: ['useEffect', 'useState', 'useRef', 'useMemo'],
          correctAnswer: 0,
        },
      ],
    },    
    {
      id: 8,
      title: 'Node.js Knowledge Quiz',
      description: 'Test your knowledge of Node.js! From server-side concepts to asynchronous programming, this quiz will challenge your understanding of the powerful runtime environment.',
      image: 'https://images.pexels.com/photos/28841111/pexels-photo-28841111/free-photo-of-fresh-caprese-salad-with-mozzarella-and-tomato.jpeg?auto=compress&cs=tinysrgb&w=600',
      questions: [
        {
          id: 1,
          text: 'What is Node.js primarily used for?',
          options: ['Front-end development', 'Server-side scripting', 'Database management', 'Mobile app development'],
          correctAnswer: 1,
        },
        {
          id: 2,
          text: 'Which of the following is a core module in Node.js?',
          options: ['fs', 'http', 'path', 'All of the above'],
          correctAnswer: 3,
        },
        {
          id: 3,
          text: 'Which programming language is used in Node.js?',
          options: ['Java', 'C++', 'JavaScript', 'Python'],
          correctAnswer: 2,
        },
        {
          id: 4,
          text: 'What does the "npm" command stand for?',
          options: ['Node Package Manager', 'Node Program Manager', 'New Package Management', 'Network Package Manager'],
          correctAnswer: 0,
        },
        {
          id: 5,
          text: 'Which of these is a non-blocking, asynchronous feature of Node.js?',
          options: ['setTimeout()', 'fs.readFile()', 'http.createServer()', 'All of the above'],
          correctAnswer: 3,
        },
      ],
    }
    
  ];
  
  export const getQuizzes = () => {
    return Promise.resolve(mockQuizzes);
  };
  
  export const getQuizDetails = (id) => {
    const quiz = mockQuizDetails.find((q) => q.id === id);
    return quiz ? Promise.resolve(quiz) : Promise.reject(new Error('Quiz not found'));
  };