import { createContext } from "react";
import { IAuthor } from '../../interfaces/Author';
import { InitialAuthor } from "../data/authorInfo";

export const AuthorContext = createContext<IAuthor>(InitialAuthor);
