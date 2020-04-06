/// <reference path="../../../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { HistorialComponent } from './historial.component';

let component: HistorialComponent;
let fixture: ComponentFixture<HistorialComponent>;

describe('historial component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HistorialComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(HistorialComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
