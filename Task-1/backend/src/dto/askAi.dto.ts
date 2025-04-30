import { IsNotEmpty, IsString } from "class-validator";

// Server-side validation for askAi endpoint
export class AskAiDto {
    @IsNotEmpty({message: "Message should't be empty"})
    @IsString({message: "Message should be a string"})
    message: string;
}