public class NPVCalculator {
    
    public static Decimal calculateNPV(List<Decimal> installments, Decimal discountRate) {
        Decimal npv = 0;
        
        for (Integer t = 0; t < installments.size(); t++) {
            npv += installments[t] / Decimal.valueOf(Math.pow(1 + discountRate.doubleValue(), t + 1));
        }
        
        return npv;
    }
    
    public static Decimal calculateInstallment(List<Decimal> installments, 
                                                Integer numberOfInstallments, Decimal discountRate) {
        Decimal npv = calculateNPV(installments, discountRate);
        
        // Calculate the installment amount using the present value of cash flows
        if (numberOfInstallments > 0) {
            return npv / numberOfInstallments;
        } else {
            return 0;
        }
    }
    public static Decimal calculateTotalInstallments(Decimal installmentAmount, Integer numberOfInstallments) {
        return installmentAmount * numberOfInstallments;
    }

    public static Decimal calculateNewUnitPrice(List<Decimal> installments) {
        Decimal total =0;
        for (Decimal installment : installments) {
           total = total + installment; 
        }

        return total;
    }
}