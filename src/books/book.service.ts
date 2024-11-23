import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
  ) {}

  // Listar todos os livros de um determinado autor
  async findBooksByAuthor(author: string): Promise<Book[]> {
    return this.bookModel.find({ author }).exec();
  }

  // Listar todos os livros de um determinado gênero
  async findBooksByGenre(genre: string): Promise<Book[]> {
    return this.bookModel.find({ genre }).exec();
  }

  // Listar todos os livros de um determinado ano
  async findBooksByYear(year: number): Promise<Book[]> {
    return this.bookModel.find({ yearOfPublication: year }).exec();
  }

  // Listar os 10 livros com mais páginas
  async findTop10BooksByPagesDesc(): Promise<Book[]> {
    return this.bookModel
      .find()
      .sort({ numberOfPages: -1 }) // Ordena por número de páginas em ordem decrescente
      .limit(10)
      .exec();
  }

  // Listar os 10 livros com menos páginas
  async findTop10BooksByPagesAsc(): Promise<Book[]> {
    return this.bookModel
      .find()
      .sort({ numberOfPages: 1 }) // Ordena por número de páginas em ordem crescente
      .limit(10)
      .exec();
  }

  // Buscar um livro pelo ISBN
  async findBookByIsbn(isbn: string): Promise<Book | null> {
    return this.bookModel.findOne({ isbn }).exec();
  }


  // Criar um novo livro
  async create(createBookDto: any): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }
  // Criar varios livros de uma vez
  async createmany(createBookDto: any[]): Promise<Book[]> {
    const createdBooks = await this.bookModel.insertMany(createBookDto);
    
    // Retorna os documentos inseridos como instâncias de Book
    return createdBooks.map((book) => new this.bookModel(book).toObject() as Book);
  }
  
  // Listar todos os livros
  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  // Atualizar um livro pelo ID
  async update(id: string, updateBookDto: any): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true, // Retorna o documento atualizado
    }).exec();

    if (!updatedBook) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }

    return updatedBook;
  }

  // Deletar um livro pelo ID
  async remove(id: string): Promise<void> {
    const result = await this.bookModel.findByIdAndDelete(id).exec();

    if (!result) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
  }

  // Outros métodos existentes (consultas por autor, gênero, etc.)
}