import { AppModule } from '../src/app.module'
import { HttpAdapterHost } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { PrismaClientExceptionFilter } from '@/prisma-client-exception/prisma-client-exception.filter'

describe('App e2e', () => {
  let app: INestApplication
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    const { httpAdapter } = app.get(HttpAdapterHost)
    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    )
    await app.init()
  })
  it.todo('should pass')
})
