/// <reference path="../../../../ClientApp/node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ReportesComponent } from './reportes.component';

let component: ReportesComponent;
let fixture: ComponentFixture<ReportesComponent>;

describe('reportes component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ReportesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ReportesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
