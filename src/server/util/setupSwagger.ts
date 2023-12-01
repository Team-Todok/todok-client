import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle("토독 API Docs")
    .setDescription(
      `
      BASE URL: https://port-0-reading-talk-5mk12alp6wy34y.sel5.cloudtype.app/api/
      
      ex) 로그인 요청시 => https://port-0-reading-talk-5mk12alp6wy34y.sel5.cloudtype.app/api/login
    `
    )
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api/docs", app, document);
}
