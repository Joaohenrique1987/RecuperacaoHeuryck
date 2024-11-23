import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // Endpoint para listar todos os livros de um determinado autor
  @Get('author/:author')
  async findBooksByAuthor(@Param('author') author: string): Promise<Book[]> {
    return this.bookService.findBooksByAuthor(author);
  }

  // Endpoint para listar todos os livros de um determinado gênero
  @Get('genre/:genre')
  async findBooksByGenre(@Param('genre') genre: string): Promise<Book[]> {
    return this.bookService.findBooksByGenre(genre);
  }

  // Endpoint para listar todos os livros de um determinado ano
  @Get('year/:year')
  async findBooksByYear(@Param('year') year: number): Promise<Book[]> {
    return this.bookService.findBooksByYear(year);
  }

  // Endpoint para listar os 10 livros com mais páginas
  @Get('top10/pages/desc')
  async findTop10BooksByPagesDesc(): Promise<Book[]> {
    return this.bookService.findTop10BooksByPagesDesc();
  }

  // Endpoint para listar os 10 livros com menos páginas
  @Get('top10/pages/asc')
  async findTop10BooksByPagesAsc(): Promise<Book[]> {
    return this.bookService.findTop10BooksByPagesAsc();
  }

  // Endpoint para buscar um livro pelo ISBN
  @Get('isbn/:isbn')
  async findBookByIsbn(@Param('isbn') isbn: string): Promise<Book | null> {
    return this.bookService.findBookByIsbn(isbn);
  }

   // Endpoint para listar todos os livros
   @Get()
   async findAll(): Promise<Book[]> {
     return this.bookService.findAll();
   }
 
   // Endpoint para criar um novo livro
   @Post()
   async create(@Body() createBookDto: any): Promise<Book> {
     return this.bookService.create(createBookDto);
   }
 
   // Endpoint para atualizar um livro
   @Put(':id')
   async update(
     @Param('id') id: string , 
     @Body() updateBookDto: any
   ): Promise<Book> {
     return this.bookService.update(id, updateBookDto);
   }
 
   // Endpoint para deletar um livro
   @Delete(':id')
   async remove(@Param('id') id: string): Promise<void> {
     return this.bookService.remove(id);
   }
   // Endponit para criar vario livros de uma vez
   @Post('batch')
   async createMany(@Body() createBooksDto: any[]): Promise<Book[]> {
    console.log(createBooksDto) 
    return this.bookService.createmany(createBooksDto);
   }

 }
