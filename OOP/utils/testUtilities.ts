export class TestUtilities {

    // STATIC keywords allows me to call this method with no need of an instance of a class (DIRECTLY)
    public static formatCurrency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    public static logMessage(message: string) : void {
        console.log("[" + TestUtilities.formatTimestamp() + "]: " + message);
        // ToDo show them the other way with the other quote (Wednesday Feb 12)
    }

    public static formatTimestamp(): string {
        const now = new Date();

        const datePart = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        }).format(now);

        const timePart = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).format(now);

        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

        // Split time and AM/PM
        const [time, period] = timePart.split(' ');

        return `${datePart} @ ${time}.${milliseconds} ${period}`;
    }
}