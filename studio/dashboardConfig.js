export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d25f7c8a68a8fa3cb61bd7d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7t5icxs5',
                  apiId: '63e80119-3f55-4c3b-8ecb-4d699aedbe74'
                },
                {
                  buildHookId: '5d25f7c8fdfa844866ff6b72',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yvm9fx7r',
                  apiId: 'a59b55cc-14e6-463d-9fb1-b2aec1420a13'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanmacolino123/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yvm9fx7r.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
