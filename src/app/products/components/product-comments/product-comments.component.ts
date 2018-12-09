import { Comment } from '@models/comment.model';
import { CommentsService } from './../../services/comments.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss']
})
export class ProductCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
    this.route.parent.paramMap
      .pipe(
        switchMap((params: Params) => {
          console.log(params);
          return params.get('id')
            ? this.commentsService.getCommentsForProduct(params.get('id'))
            : Promise.resolve(null);
        })
      )
      .subscribe(
        comments => {
          this.comments = comments;
        },
        err => console.log(err)
      );
  }
}
