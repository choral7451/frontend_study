import { Resolver, Args, Mutation, Query, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { CreateReviewInput } from './dto/createReview.input';
import { Board } from './entities/board.entity';
import { Review } from './entities/review.entity';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService, //
  ) {}

  @Query(() => [Board])
  async fetchBoards() {
    return await this.boardService.find();
  }

  @Query(() => Board)
  async fetchBoard(@Args('id') id: number) {
    return await this.boardService.findOne({ id });
  }

  @Query(() => [Review])
  async fetchReviews(@Args('id') id: number) {
    return await this.boardService.findReviews({ id });
  }

  @Mutation(() => String)
  async createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    return await this.boardService.save({ createBoardInput });
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Args('id') id: number) {
    return await this.boardService.delete({ id });
  }

  @Mutation(() => Int)
  async createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ) {
    console.log(createReviewInput);
    return await this.boardService.saveReview({ createReviewInput });
  }
}