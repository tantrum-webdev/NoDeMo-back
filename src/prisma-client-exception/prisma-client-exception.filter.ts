import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Prisma } from '@prisma/client'
import { FastifyReply } from 'fastify'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message)
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<FastifyReply>()
    const message = exception.message.replace(/\n/g, '')

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.BAD_REQUEST
        response.status(status).send({
          statusCode: status,
          message: message,
        })
        break
      }
      default:
        super.catch(exception, host)
        break
    }
  }
}
