import { TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CalculatorComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CalculatorComponent],
            imports: [FormsModule]
        })
        .compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have initial values as 0 for number1, number2 and result', () => {
        const fixture = TestBed.createComponent(CalculatorComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges()
        expect(component.number1).toBe(0);
        expect(component.number2).toBe(0);
        expect(component.result).toBe(0);

        fixture.whenStable().then(() => {
            fixture.detectChanges(); 
            const number1Input = fixture.debugElement.query(By.css('input[placeholder="Número 1"]')).nativeElement;
            const number2Input = fixture.debugElement.query(By.css('input[placeholder="Número 2"]')).nativeElement;
            const result = fixture.debugElement.query(By.css('h3')).nativeElement;

            expect(number1Input.value).toBe('0');
            expect(number2Input.value).toBe('0');
            expect(result.textContent).toContain('Resultado: 0');
        });
    })

});