import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import express from 'express';
import { RedirectService } from './redirect.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('go')
export class RedirectController {
    constructor(private readonly redirectService: RedirectService) { }

    @Get(':shortCode')
    @ApiOperation({ summary: 'Get redirect short link' })
    async redirect(
        @Param('shortCode') shortCode: string,
        @Req() req: Request,
        @Res() res: express.Response,
    ) {
        const link = await this.redirectService.findByShortCode(shortCode);

        await this.redirectService.trackClick(link.id);

        return res.redirect(link.target_url);
    }
}