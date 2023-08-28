import { rest } from 'msw'
import { faker } from '@faker-js/faker';
import { RemotePost } from '../types/Post.type';

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    const posts:RemotePost[] = []

    Array.from(Array(2)).forEach(() => {
      posts.push({
        postId:faker.string.uuid(),
        authorName:faker.person.fullName(),
        content:faker.commerce.productDescription(),
        publishedDate:faker.date.soon({days: 10}),
        avatar: faker.image.avatar()
      })
    })

    posts.push({
        postId:faker.string.uuid(),
        authorName:"Sandra Lindgren",
        content:faker.commerce.productDescription(),
        publishedDate:faker.date.soon({days: 10}),
        avatar: faker.image.avatar()
    })
    return res(
      ctx.json(posts)
    )
  }),
]