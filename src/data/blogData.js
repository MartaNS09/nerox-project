const blogData = [
  {
    id: 1,
    img: 'assets/img/blog/1/react.jpg',
    img2: 'assets/img/blog/2/blog-1.jpg',
    img3: 'assets/img/blog/3/blog-5.jpg',
    img4: 'assets/img/blog/blog-1.jpg',
    bigImg: 'assets/img/blog/blog-big-1.jpg',
    gridImg: 'assets/img/blog/grid/blog-1.jpg',
    tags: ["React", "Web development", "SSR"],
    title: 'What React Developers Need to Know in 2022',
    date: 'June 22, 2022',
    desc: 'This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience.',
    class: 'postbox_thumb w-img mb-30',
    blogAuthor: 'Gorbachev Ivan',
    category: 'Web Development',
    info:
      <>
        <h4 className="postbox__title-sm mb-20">Knowledge of JavaScript</h4>
        <p>
          React is built on top of JavaScript. First of all, people who want to learn React need to understand how well they know JavaScript itself.
        </p>
        <p className="mb-40">
          Very often, developers ask questions that show that they do not know the basics of JavaScript. Whereas questions about the React ecosystem are much less common. Therefore, first of all, we recommend deepening your knowledge of JavaScript, and then returning to React.
        </p>

        <h4 className="postbox__title-sm mb-20">Using the State Manager</h4>
        <p>React.js does not have a built-in State Manager. The Redux library has been used as a standard for a long time, but it does not fulfill this role very well - when working with it, you have to write a lot of boilerplate code, there are no controls for asynchronous behavior and side effects.</p>
        <p>This is how other State Managers began to appear. Redux developers took their shortcomings into account and introduced the Redux Toolkit library, which was well received by front-end developers.</p>
        <p>Redux Toolkit is a library on top of Redux. It gives you the ability to achieve the same as Redux, but with the Redux Toolkit you have to write much less code than with Redux. In addition, the Redux Toolkit uses Immer.js internally, so there is no need to think about data immutability, i.e. use destructuring, creating a new state object in reducers each time.</p>
        <p>Another fairly promising library is MobX. The business logic of MobX is different from Redux. Do not forget about Effector, which was created by people from the CIS.</p>
        <p className="mb-40">These three State Managers are by far the most popular. All three libraries do their job very well, but we usually use either the Redux Toolkit or Effector.</p>

        <h4 className="postbox__title-sm mb-20">Server-Side Rendering</h4>
        <p>There are several popular SSR solutions available today. On our first projects where we used SSR, we had a completely custom solution. Over time, we began to study and use ready-made solutions. Each of them has its pros and cons. For example, we use Razzle on one of our current projects, and Next.js on another.</p>
        <p className="mb-40">Next.js is a popular lightweight framework for static and server applications using React. It includes out-of-the-box styling and routing solutions and assumes you are using Node.js as your backend. What Next doesn’t quite like is that in some cases it dictates the architecture and how to build applications. But this is already a matter of taste and personal preferences.</p>

        <h4 className="postbox__title-sm mb-20">React Hooks</h4>
        <p>React Hooks have been visiting us since version 16.8 and will stay with us for a long time. If you are hearing about them for the first time, then you should first familiarize yourself with them in the official React documentation.</p>
        <p>Hooks are just another way to describe the logic of your components. It allows you to add to the functional components some features that were previously unique to class components.</p>
        <p>Most people in the interview float on questions about hooks, although all the information is in the documentation. Anyone who wants to develop should definitely at least see how they work, and with work experience you can understand the technology more deeply.</p>
        <p>The use of hooks has some limitations that distinguish them from regular functions. First of all, they cannot be used in class components. Hooks cannot be called inside loops, conditions. React itself enforces this restriction to keep track of which hooks have been called.</p>
        <p className="mb-40">When hooks first appeared, we at Holyweb experimented with them, wrote new components, and saw what would come of it. When everything worked out well, we used them further, wrote new features on them. For those who haven't used React Hooks yet, I would recommend this to tryIt is very easy to describe the necessary logic with them, they make the code cleaner and more understandable.</p>
      </>
  },
  {
    id: 2,
    img: 'assets/img/blog/2/react-native.png',
    img2: 'assets/img/blog/2/blog-1.jpg',
    img3: 'assets/img/blog/3/blog-5.jpg',
    img4: 'assets/img/blog/blog-1.jpg',
    bigImg: 'assets/img/blog/blog-big-1.jpg',
    gridImg: 'assets/img/blog/grid/blog-1.jpg',
    tags: ["Mobile development"],
    title: 'How to Become a Mobile Developer',
    date: 'June 15, 2022',
    desc: 'This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience.',
    class: 'postbox_thumb w-img mb-30',
    blogAuthor: 'Nikita Korotkov',
    category: 'Mobile Development',
    info:
      <>
        <h4 className="postbox__title-sm mb-20">Is mobile developer in demand? Is it easy to find a job in this field?</h4>
        <p>
          In 2021, mobile development remains one of the most popular areas. The situation with the pandemic only gave impetus to its development. Many companies have gone online, a web page alone is not enough to survive in a competitive environment that clearly sets the trend for mobile solutions.
        </p>
        <p>
          Even in pre-corona times, there was a shortage of mobile developers in the market. Now the situation has become much worse.
        </p>
        <p className="mb-40">
          From all of the above, it turns out that finding a job for a novice specialist with a couple of portfolio projects is not difficult. In addition, the remote format is becoming an integral part of IT, and there are more and more internship programs from large companies.
        </p>

        <h4 className="postbox__title-sm mb-20">What are the trends in mobile development? Does it make sense to master cross-platform solutions?</h4>
        <p>There are three main directions in mobile development: Android, iOS and cross-platform solutions (Flutter, React Native, PhoneGap).</p>
        <p>Android development uses Kotlin and Java, iOS uses Swift and Objective-C. A few years ago, the main languages ​​for Android and iOS were Java and Objective-C. However, with the advent of new languages, many projects, including large IT companies, began to use modern solutions. Now it is enough for a novice specialist to have knowledge of the main platform on which he develops (iOS or Android), as well as one of the new programming languages ​​(Swift or Kotlin).</p>

        <h4 className="postbox__title-sm mb-20">What are the main roles and tasks of a mobile developer?</h4>
        <p>
          The developer as a whole is not only the one who types the code on the keyboard. This is a specialist who understands the specific business problem that he needs to solve with this code. The mobile developer is no exception. The only difference is an understanding of the peculiarities of mobile technologies in general (such as push notifications, Internet speed limits, charging and memory).
        </p>
        <p>
          Obviously, mobile applications are the same front-end part of the application. Accordingly, standard tasks and problems follow from this: layout support for most devices, the need to take into account versions of operating systems, etc.
        </p>
        <p className="mb-40">One ​​of the main issues that must be taken into account in the development of a thin mobile client (the main part and logic of which is implemented on the backend) is the support of backward compatibility between different versions of applications. One of the main tasks of a mobile developer is to fulfill the set requirements with an eye to the limitations and features listed above.</p>

        <h4 className="postbox__title-sm mb-20">How to become a mobile app developer?</h4>
        <p>If we are talking about the case when a person has no knowledge and experience in programming, then it is worth studying first:</p>
        <ul className="mb-20">
          <li>one of the programming languages ​​(Kotlin or Swift),</li>
          <li>platform itself (Android or iOS),</li>
          <li>object-oriented programming,</li>
          <li>algorithms and data structures (no bigotry, just the basics).</li>
        </ul>
        <p>You also need to learn how to google. Some may find this advice offensive, but it is not. Programmers of all levels and stripes google, without exception. The ability to ask the right question is a skill that will be required in further work with colleagues if this question needs to be addressed to them.</p>
        <p className="mb-40">It's worth mentioning that Apple devices are required to start developing for iOS. At a minimum, you need to purchase a budget Mac mini or MacBook in the aftermarket. To learn one of the programming languages ​​and study the platform itself, the main tutorials on the Apple or Android website are suitable. Ideally, find a mentor who will help at the initial stage and build a training plan. Courses here will also come in handy, but you should not hope that after simply listening to them everything will become obvious and understandable.</p>

        <h4 className="postbox__title-sm mb-20">Will mobile development remain in demand in the coming years?</h4>
        <p className="mb-40">Of course, mobile development will remain in demand. Despite the obvious stagnation in the release of new features for smartphones, they still continue to be used by a huge number of people around the world. And most tasks will also be solved using the device that is in your pocket. At least in the next 10-15 years.</p>
      </>
  },
  {
    id: 3,
    img: 'assets/img/blog/3/seo-optim.jpg',
    img2: 'assets/img/blog/2/blog-1.jpg',
    img3: 'assets/img/blog/3/blog-5.jpg',
    img4: 'assets/img/blog/blog-1.jpg',
    bigImg: 'assets/img/blog/blog-big-1.jpg',
    gridImg: 'assets/img/blog/grid/blog-1.jpg',
    tags: ["SEO", "Optimization", "Website promotion"],
    title: 'How to promote a site - experts answer',
    date: 'March 20, 2022',
    desc: 'This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience.',
    class: 'postbox_thumb w-img mb-30',
    blogAuthor: 'Kryukov Timur',
    category: 'SEO optimization',
    info:
      <>
        <h4 className="postbox__title-sm mb-20">What should be taken into account when creating a site so that it is visited by the target audience?</h4>

        <p>
          Unfortunately, there is no universal answer, because the products are very different. The method of selling sneakers (as well as any other FMCG product) is very different from selling complex products and services. However, I can make the following recommendations:
        </p>

        <ul className="mb-20">
          <li>The mobile era has arrived. The lion's share of traffic comes from mobile platforms. This means that the site should look perfect on all mobile devices.</li>
          <li>The time of contact with the user has been noticeably reduced. Key messages need to be conveyed as quickly and concisely as possible.</li>
          <li>Look at the popularity of Facebook and Instagram. Why do we love them so much? There are many pictures there. Use bright visual creatives - this includes the human reptilian brain and has the best effect on the final conversion.</li>
          <li>Try to minimize user exit points from the landing page. The fewer opportunities a user has to get lost on your site, the higher your conversion rate will be.</li>
        </ul>

        <h4 className="postbox__title-sm mb-20">How to optimize your site for search engines?</h4>

        <p>
          Search engines have learned to determine what we really like and what we don't with very high accuracy. Make the site interesting, catch the user's attention, accompany accounts in social networks, land traffic from there through offers and promotions. And, perhaps most importantly, mobile devices. Give it maximum attention. The next key point is behavioral factors. And writing headings, markup and other things have sunk into oblivion, and thank God!
        </p>

        <h4 className="postbox__title-sm mb-20">What else, besides SEO, will help promote the site?</h4>

        <p className="mb-40">
          I can highlight three points. First, create your own audience, work with it, bring it back through special offers. Second, keep your blog. This is not only an opportunity to tell something interesting to the consumer and prove your expertise, but it also structures your business - there is no better way to really understand something than to write it on paper. Third, work with agents of influence. This is a great channel to reach your target audience. Namely, the target audience will give you good behavioral factors.
        </p>
      </>
  }

]
export default blogData;