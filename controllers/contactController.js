import Message from "../models/contactModel.js";

export const sendMessage = async (req, res) => {
    try { 
        const {  name, email, phone, message  } = req.body;
        if(!name || !email || !phone || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }   
        const newMessage = new Message({ name, email, phone, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully.' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }   


};

export const getMessage = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });      
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }   
};      

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(id);
        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found.' });
        }   
        res.status(200).json({ message: 'Message deleted successfully.' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }   
};  