import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHolding, removeHolding } from '../../store/slice/portfolioSlice.js';
import PortfolioSummary from '../../components/protFolio/PortFolioSummary/ProtFolioSummary.jsx';
import PortfolioChart from '../../components/protFolio/PortFolioChart/PortFolioChart.jsx';
import TransactionForm from '../../components/protFolio/TransactionForm/TransactionForm.jsx';
import Modal from '../../components/common/Model/Model.jsx';
import Button from '../../components/common/Button/Button.jsx';
import Table from '../../components/common/Table/Table.jsx';
import { formatCurrency } from '../../utils/formatters/numberFormatter.js';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Portfolio = () => {
  const dispatch = useDispatch();
  const { holdings, totalValue, totalCost, profitLoss } = useSelector((state) => state.portfolio);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTransaction = (transaction) => {
    dispatch(addHolding({ ...transaction, id: Date.now() }));
    setIsModalOpen(false);
    toast.success('Transaction added successfully');
  };

  const handleRemoveHolding = (id) => {
    dispatch(removeHolding(id));
    toast.success('Holding removed');
  };

  const columns = [
    {
      header: 'Asset',
      accessor: 'name',
      render: (row) => <span className="font-medium">{row.name}</span>,
    },
    {
      header: 'Amount',
      accessor: 'amount',
      align: 'text-right',
    },
    {
      header: 'Buy Price',
      accessor: 'buyPrice',
      align: 'text-right',
      render: (row) => formatCurrency(row.buyPrice),
    },
    {
      header: 'Current Value',
      accessor: 'value',
      align: 'text-right',
      render: (row) => formatCurrency(row.amount * row.buyPrice),
    },
    {
      header: 'Actions',
      align: 'text-center',
      render: (row) => (
        <Button variant="danger" onClick={() => handleRemoveHolding(row.id)}>
          <FiTrash2 />
        </Button>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <FiPlus className="inline mr-2" />
          Add Transaction
        </Button>
      </div>

      <PortfolioSummary totalValue={totalValue} totalCost={totalCost} profitLoss={profitLoss} />

      {holdings.length > 0 && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="card p-0 overflow-hidden">
              <Table columns={columns} data={holdings} />
            </div>
            <PortfolioChart holdings={holdings} />
          </div>
        </>
      )}

      {holdings.length === 0 && (
        <div className="card p-12 text-center mt-6">
          <p className="text-gray-500 mb-4">No holdings yet. Add your first transaction!</p>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Add Transaction
          </Button>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Transaction">
        <TransactionForm
          onSubmit={handleAddTransaction}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Portfolio;