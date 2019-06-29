const chai = require('chai')
chai.use(require('chai-http'))
import { clearDb } from '../db'
import { runQuery } from '../run'

describe('Project', () => {
  afterEach(() => {
    return clearDb()
  })

  /*
   * Test the Task resolvers
   */
  describe('Project Resolvers', () => {
    it('should resolve correctly', async () => {
      const query = `
       query {
         projects {
           id
           name
         }
       } 
      `

      const results = await runQuery(query)

      results.should.not.have.property('errors')

      results.should.have
        .property('data')
        .that.has.property('projects')
        .that.has.length(0)
    })

    it('should create a project and change the order of it', async () => {
      const projectId = await insertProject()
      await changeOrder(projectId)

      async function insertProject() {
        const query = `
       mutation NewProject($input: NewProjectInput) {
         newProject(input: $input) {
           id
           name
           order
         }
       } 
      `

        const variables = {
          input: {
            name: 'test project',
            description: 'test project description',
          },
        }

        const results = await runQuery(query, variables)

        results.should.not.have.property('errors')

        results.should.have
          .property('data')
          .that.has.property('newProject')
          .that.has.property('order')
          .that.equals(0)

        return results.data && results.data.newProject.id
      }

      async function changeOrder(projectId: any) {
        const query = `
        mutation UpdateProjectSorting($input: UpdateProjectSortingInput) {
          updateProjectSorting(input: $input) {
            id
            name
            order
          }
        } 
       `

        const variables = {
          input: {
            id: projectId,
            order: 10,
          },
        }

        const results = await runQuery(query, variables)

        results.should.have
          .property('data')
          .that.has.property('updateProjectSorting')
          .that.has.property('order')
          .that.equals(10)
      }
    })
  })
})
