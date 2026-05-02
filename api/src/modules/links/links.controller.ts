import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LinkResponseDto } from './dto/links-response.dto';
import { CreateLinkDto } from './dto/create-links.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {

    constructor(private readonly linksService: LinksService) {}
    @Post()
    @ApiOperation({ summary: 'Create short link' })
    @ApiResponse({
        status: 201,
        description: 'Link created successfully',
        type: LinkResponseDto,
    })
    create(@Body() dto: CreateLinkDto): Promise<LinkResponseDto[]> {
        return this.linksService.create(dto);
    }
}

