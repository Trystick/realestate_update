import './cancelpacket.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CancelPacket = () => {
  const {orderId} = useParams();
  const [cancelReason, setCancelReason] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleCancel = async () => {
    if(!cancelReason){
      setMessage('Xin hãy nhập lý do hủy gói để có thể phục vụ quý khách tốt hơn');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8800/api/cancel-package', { orderId, cancelReason });
      alert(response.data.message);
      navigate('/')
    } catch (error) {
      setMessage('Có lỗi xảy ra khi hủy gói dịch vụ.');
    }
  };

  console.log(cancelReason);
  return (
    <div className='cancelpage'>
       <div className="cancel-button">
      <label>
        LÝ DO HỦY
      </label>
      <select value={cancelReason} onChange={e => setCancelReason(e.target.value)}>
        <option value="">---- Xin hãy chọn lý do hủy dịch vụ ----</option>
        <option value="Vấn đề với sản phẩm">Vấn đề với sản phẩm</option>
        <option value="Vấn đề kinh tế">Vấn đề kinh tế</option>
        <option value="Vấn đề sử dụng">Vấn đề sử dụng</option>
        <option value="Vấn đề lợi nhuận">Vấn đề lợi nhuận</option>
        <option value="Vấn đề công việc">Vấn đề công việc</option>
      </select>

      <button onClick={handleCancel}>Hủy gói</button>
      {message && <p>{message}</p>}
      <div className="notice">
        <h2>Lưu ý</h2>
        <div className="notice-cancel">
          <span>*</span> Quý khách chỉ có thể hủy gói sau ngày thanh toán 3 ngày. 
        </div>
        <div className="contact-cancel">
          <span>*</span> Xin vui lòng liên hệ Zalo: 0933972541 để thực hiện quá trình hoàn tiền cho gói thanh toán. 
        </div>
        <div className="cancel-percent">
          <span>*</span> Quý khách chỉ có thể nhận hoàn tiền 70% số tiền ban đầu đã thanh toán gói.  
        </div>
      </div>
      </div>
    </div>
  )
}

export default CancelPacket
