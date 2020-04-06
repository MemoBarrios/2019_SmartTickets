/// <reference path="../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FooterComponent } from './footer.component';

let component: FooterComponent;
let fixture: ComponentFixture<FooterComponent>;

describe('footer component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FooterComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
