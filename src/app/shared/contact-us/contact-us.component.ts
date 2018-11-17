import { ConfigOptionsService } from './../../core/config-options.service';
import {
  GeneratorService,
  TokenGenerator
} from './../../core/generator.service';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ConstantsService } from './../../core/constants.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  tokens: string[] = [];

  constructor(
    @Inject(ConstantsService) public constant: any,
    @Inject(GeneratorService) private generatorService: TokenGenerator,
    @Optional() private configOptionsService: ConfigOptionsService
  ) {}

  ngOnInit() {
    let i = 10;

    while (i--) {
      const token = this.generatorService.generateToken();
      this.tokens.push(token);
    }

    if (this.configOptionsService) {
      this.configOptionsService.saveConfig(this.constant);
    }
  }
}
