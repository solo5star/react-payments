import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useCallback, useMemo } from 'react';

import type { CreditCard } from '../domain/CreditCard';
import { usePersistedState } from '../hooks/usePersistedState';

type PaymentsContextValue = {
  creditCards: CreditCard[];
  setCreditCards: Dispatch<CreditCard[]>;
  getCreditCardById: (id: number) => CreditCard | null;
  assignCreditCardId: () => number;
  registerCreditCard: (creditCard: CreditCard) => CreditCard;
  updateCreditCard: (creditCard: CreditCard) => void;
  recommendCreditCardDisplayName: (owner: string | undefined) => string;
};

export const PaymentsContext = createContext<PaymentsContextValue | null>(null);

export const PaymentsProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [creditCards, setCreditCards] = usePersistedState<CreditCard[]>('creditCards', []);
  const [currentCreditCardId, setCurrentCreditCardId] = usePersistedState('currentCreditCardId', 1);

  const assignCreditCardId = useCallback(() => {
    setCurrentCreditCardId((id) => id + 1);
    return currentCreditCardId;
  }, [currentCreditCardId, setCurrentCreditCardId]);

  const getCreditCardById = useCallback(
    (id: number) => {
      return creditCards.find((creditCard) => creditCard.id === id) ?? null;
    },
    [creditCards],
  );

  const updateCreditCard = useCallback(
    (newCreditCard: CreditCard) => {
      setCreditCards(
        creditCards.map((creditCard) =>
          creditCard.id === newCreditCard.id ? newCreditCard : creditCard,
        ),
      );
    },
    [creditCards, setCreditCards],
  );

  const recommendCreditCardDisplayName = useCallback(
    (owner: string | undefined) => {
      const displayName = owner ? `${owner}의 카드` : '카드';
      let alterDisplayName = displayName;
      let count = 2;

      // eslint-disable-next-line no-loop-func
      while (creditCards.find((creditCard) => creditCard.displayName === alterDisplayName)) {
        alterDisplayName = `${displayName} ${count}`;
        count += 1;
      }
      return alterDisplayName;
    },
    [creditCards],
  );

  const registerCreditCard = useCallback(
    (creditCard: CreditCard) => {
      const newCreditCard = {
        ...creditCard,
        id: assignCreditCardId(),
        displayName: creditCard.owner,
      };
      setCreditCards([...creditCards, newCreditCard]);
      return newCreditCard;
    },
    [creditCards, setCreditCards, assignCreditCardId],
  );

  const contextValue = useMemo(
    () => ({
      creditCards,
      setCreditCards,
      getCreditCardById,
      assignCreditCardId,
      registerCreditCard,
      updateCreditCard,
      recommendCreditCardDisplayName,
    }),
    [
      creditCards,
      setCreditCards,
      getCreditCardById,
      assignCreditCardId,
      registerCreditCard,
      updateCreditCard,
      recommendCreditCardDisplayName,
    ],
  );

  return <PaymentsContext.Provider value={contextValue}>{children}</PaymentsContext.Provider>;
};
