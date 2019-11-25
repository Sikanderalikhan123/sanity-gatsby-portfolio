export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ddb777f05ea28600396d214',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bdyprn4k',
                  apiId: 'e5e2ac3a-0273-4c03-9e82-3430988ff576'
                },
                {
                  buildHookId: '5ddb778090143908f68da48e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vfgfmk3x',
                  apiId: 'e9ea1e26-4c47-4630-9164-ae5cf00e5afd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sikanderalikhan123/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vfgfmk3x.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
