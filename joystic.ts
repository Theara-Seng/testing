/*****************************************************************************
* | File      	:	WSJoyStick
* | Author      :   Waveshare team
* | Function    :	Contorl JoyStick
* | Info        :
*----------------
* |	This version:   V1.0
* | Date        :   2018-02-06
* | Info        :   Basic version
*
******************************************************************************/
enum DIRS {
    NONE = 0,
    U = 1,
    D = 2,
    L = 3,
    R = 4,
    U_L = 5,
    U_R = 6,
    D_L = 7,
    D_R = 8
}

enum KEYs {
    P = 0,
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5,
    F = 6,
}
let JoyStick_Ps = DigitalPin.P8;
let JoyStick_Xs = AnalogPin.P1;
let JoyStick_Ys = AnalogPin.P2;
let KEYs_A = DigitalPin.P5;
let KEYs_B = DigitalPin.P11;
let KEYs_C = DigitalPin.P15;
let KEYs_D = DigitalPin.P14;
let KEYs_E = DigitalPin.P13;
let KEYs_F = DigitalPin.P12;

/**
 * Operational remote JoyStick function
 */
//% weight=20 color=#3333FF icon="\uf11b"
namespace joysticker {
    let Read_X = 0, Read_Y = 0;
    //% blockId==JoyStickInit block="JoyStickInit"
    //% weight=100
    export function JoyStickInits(): void {
        pins.setPull(JoyStick_Ps, PinPullMode.PullUp);
        pins.setPull(KEYs_A, PinPullMode.PullUp);
        pins.setPull(KEYs_B, PinPullMode.PullUp);
        pins.setPull(KEYs_C, PinPullMode.PullUp);
        pins.setPull(KEYs_D, PinPullMode.PullUp);
        pins.setPull(KEYs_E, PinPullMode.PullUp);
        pins.setPull(KEYs_F, PinPullMode.PullUp);

        //10 bits of AD conversion chip，max = 1024
        Read_X = pins.analogReadPin(JoyStick_Xs);
        Read_Y = pins.analogReadPin(JoyStick_Ys);
    }

    //% blockId==Listen_KEYs block="KEYs %pin |Press"
    //% weight=90
    export function Listen_KEYss(pin: KEYs): boolean {
        let Val = 2;

        //Read pin 
        if (pin == KEYs.P) {
            Val = pins.digitalReadPin(JoyStick_Ps);
        } else if (pin == KEYs.A) {
            Val = pins.digitalReadPin(KEYs_A);
        } else if (pin == KEYs.B) {
            Val = pins.digitalReadPin(KEYs_B);
        } else if (pin == KEYs.C) {
            Val = pins.digitalReadPin(KEYs_C);
        } else if (pin == KEYs.D) {
            Val = pins.digitalReadPin(KEYs_D);
        } else if (pin == KEYs.E) {
            Val = pins.digitalReadPin(KEYs_E);
        } else {
            Val = pins.digitalReadPin(KEYs_F);
        }

        //registerWithDal((int)pin, MICROBIT_KEYs_EVT_CLICK, body);
        //To determine the value
        if (Val == 0) {
            return true;
        } else {
            return false;
        }
    }

    //% blockId==onKEYs block="KEYs %pin |Press"
    //% weight=80
    export function onKEYs(pin: KEYs, body: Action): void {
        let Pin = 0;

        //Read pin 
        if (pin == KEYs.P) {
            Pin = JoyStick_Ps;
        } else if (pin == KEYs.A) {
            Pin = KEYs_A;
        } else if (pin == KEYs.B) {
            Pin = KEYs_B;
        } else if (pin == KEYs.C) {
            Pin = KEYs_C;
        } else if (pin == KEYs.D) {
            Pin = KEYs_D;
        } else if (pin == KEYs.E) {
            Pin = KEYs_E;
        } else {
            Pin = KEYs_F;
        }
        pins.onPulsed(Pin, PulseValue.Low, body);
    }

    //% blockId==Listen_DIRS block="DIRS DIRS %pin "
    //% weight=70
    export function Listen_Dirs(Dir: DIRS): boolean {
        let Get_DIRS = DIRS.NONE;

        let New_X = pins.analogReadPin(AnalogPin.P1);
        let New_Y = pins.analogReadPin(AnalogPin.P2);

        let Right = New_X - Read_X;
        let Left = Read_X - New_X;
        let Up = New_Y - Read_Y;
        let Down = Read_Y - New_Y;

        let Dx = Math.abs(Read_X - New_X);
        let Dy = Math.abs(New_Y - Read_Y);

        let Precision = 150; //0.5v

        if (Right > Precision && Dy < Precision) {
            Get_DIRS = DIRS.R;
        } else if (Left > Precision && Dy < Precision) {
            Get_DIRS = DIRS.L;
        } else if (Up > Precision && Dx < Precision) {
            Get_DIRS = DIRS.U;
        } else if (Down > Precision && Dx < Precision) {
            Get_DIRS = DIRS.D;
        } else if (Right > Precision && Up > Precision) {
            Get_DIRS = DIRS.U_R;
        } else if (Right > Precision && Down > Precision) {
            Get_DIRS = DIRS.D_R;
        } else if (Left > Precision && Up > Precision) {
            Get_DIRS = DIRS.U_L;
        } else if (Left > Precision && Down > Precision) {
            Get_DIRS = DIRS.D_L;
        } else {
            Get_DIRS = DIRS.NONE;
        }

        //To determine the value
        if (Get_DIRS == Dir) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Plays a tone through pin ``P0`` for the given duration.
     * @param frequency pitch of the tone to play in Hertz (Hz)
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone weight=60
    //% blockId=PlayMusic block="Play |Music %note=device_note|for %duration=device_beat" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    export function PlayMusics(frequency: number, ms: number): void {
        pins.analogPitch(frequency, ms);
    }

}
