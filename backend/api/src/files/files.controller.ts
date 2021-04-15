import { Controller, Get, Param, Res } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { join } from 'path';

@Controller('files')
export class FilesController {
  @Get(':filePath')
  findFile(@Param('filePath') filePath, @Res() res): Observable<any> {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + filePath)));
  }
}
