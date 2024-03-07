import { Tabs } from 'antd';
import '../../styles/tabs.css';

const TabsInformation = ({ product }) => {

  const items = [
    {
      key: '1',
      label: (<p className='font-[Poppins] text-[1rem] font-medium'>Description</p>),
      children: (
        <div dangerouslySetInnerHTML={{ __html: product?.richDescription }}></div>
      ),
    },
    {
      key: '2',
      label: (<p className='font-[Poppins] text-[1rem] font-medium'>Additional Information</p>),
      children: (
        <div className='flex gap-6 items-center'>
          <div className='font-[Poppins] text-[14px] text-gray-900'>
            <p className='mb-3'>Brand:</p>
            <p className='mb-3'>Category:</p>
            <p className='mb-3'>Stock Status:</p>
          </div>

          <div className='font-[Poppins] text-[14px] text-gray-600'>
            <p className='mb-3'>{product?.brand}</p>
            <p className='mb-3'>{product?.category.name}</p>
            {
              product?.countInStock > 0 ?
                (<p className='mb-3'>Available ({product?.countInStock})</p>)
                :
                (<p className='mb-3'>Not available</p>)
            }
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='desc-tabs'>
      <Tabs defaultActiveKey='1' items={items} centered />
    </div>
  );
};

export default TabsInformation;