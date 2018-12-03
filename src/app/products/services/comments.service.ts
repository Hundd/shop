import { Comment } from './../models/comment.model';
import { Injectable } from '@angular/core';
import faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor() {}

  getCommentForProduct(id: string): Promise<Comment> {
    return Promise.resolve({
      avatar: faker.image.avatar(),
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      comment: faker.lorem.paragraph(2 + parseInt(id))
    });
  }

  getCommentsForProduct(id: string): Promise<Comment[]> {
    return Promise.all([
      this.getCommentForProduct(id),
      this.getCommentForProduct(id),
      this.getCommentForProduct(id)
    ]);
  }
}
