import { Controller, Post, Body, Req, HttpException, HttpStatus } from '@nestjs/common';
import { RoomBookService } from '../services/room-book.service';
import { BookRoomDto } from '../dtos/book-room.dto';
import { BookRoomCommand } from '../commands/book-room.command';
import { Result } from '../dtos/result.model.dto';


@Controller('v1/rooms')
export class AgendaController {
    constructor(private readonly service: RoomBookService) { }

    @Post()
    async Book(@Req() request, @Body() model: BookRoomDto) {
        try {
            var command = new BookRoomCommand(request.user.document, model.roomId, model.date);
            await this.service.Book(command);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível reservar sua sala', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

}