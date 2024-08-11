import { Transaction } from 'dexie';

export function populate(transaction: Transaction) {
  transaction.table('configProfiles').add({
    backgroundImageUrl:
      'https://images.unsplash.com/photo-1722648404090-2179fba1b4b0?q=80&w=1740&auto=format&fitcrop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    overlayOpacity: 0,
    overlayColor: 'black',
    timerColor: 'white',
  });
}
