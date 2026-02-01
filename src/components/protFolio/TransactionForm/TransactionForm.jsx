import { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const TransactionForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    cryptoId: '',
    name: '',
    amount: '',
    buyPrice: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount),
      buyPrice: parseFloat(formData.buyPrice),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Cryptocurrency Name"
        required
      />
      
      <Input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        step="0.00000001"
        required
      />
      
      <Input
        type="number"
        name="buyPrice"
        value={formData.buyPrice}
        onChange={handleChange}
        placeholder="Buy Price"
        step="0.01"
        required
      />
      
      <Input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <div className="flex gap-2">
        <Button type="submit" variant="primary" className="flex-1">
          Add Transaction
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;