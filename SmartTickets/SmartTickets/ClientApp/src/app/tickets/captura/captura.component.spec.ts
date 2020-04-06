/// <reference path="../../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CapturaComponent } from './captura.component';

let component: CapturaComponent;
let fixture: ComponentFixture<CapturaComponent>;

describe('captura component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CapturaComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CapturaComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
