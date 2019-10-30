import { Module } from "@nestjs/common";
import { AuthImpl } from "./lib";
import { Auth } from "../core/lib";

@Module({
  providers: [
    {
      provide: Auth,
      useClass: AuthImpl
    }
  ],
  exports: [{
    provide: Auth,
    useClass: AuthImpl
  }]
})
export class WebAppBasicModule {}
