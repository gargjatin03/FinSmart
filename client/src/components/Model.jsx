import { DollarSign, Rows, X } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const categories = ["Food", "Transportation", "Entertainment", "Shopping", "Bills", "Healthcare", "Other"]

function Model({isOpen, onClose, onSubmit, initialData}) {

    const empty = {
        description: "",
        amount: "",
        category: "Food",
        date: new Date().toISOString().split("T")[0],
        notes: ""
    }

    const [formData, setFormData] = useState(initialData || empty)
    useEffect(()=>{
        setFormData(initialData || empty)
    },[initialData]);

    if(!isOpen) return null;

    const handleSubmit = ()=>{
        if(!formData.description || !formData.amount){
            alert("please fill require fields")
            return;
        }
        onSubmit({...formData, amount: parseFloat(formData.amount)});
    }

    return (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-lg z-50 
        flex items-center justify-center p-4">
            {/* Modal content can be added here */}
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {initialData ? "Edit Expense": "Add Expense"}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Track your spending</p>
                    </div>
                    <button type="submit"
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                        onClick={onClose}
                    >
                        <X className="w-5 h-5 " />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">What did you buy?</label>
                        <input type="text" placeholder="Enter description"
                            value={formData.description} 
                            onChange={(e)=> setFormData({...formData, description: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                            focus:outline-none focus:border-indigo-500 "
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                        <div className="relative">
                            <DollarSign className="w-5 h-5 text-gray-400 absolute top-3.5 left-3" />
                            <input type="number" 
                                placeholder="0.00"
                                value={formData.amount} 
                                onChange={(e)=> setFormData({...formData, amount: e.target.value})}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl
                                focus:outline-online focus:border-indigo-500" 
                            />
                        </div>
                    </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                        <div className="relative">
                            {/* <DollarSign className="w-5 h-5 text-gray-400 absolute top-3.5 left-3" /> */}
                            <input type="date" 
                                value={formData.date} 
                                onChange={(e)=> setFormData({...formData, date: e.target.value})}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl
                                focus:outline-online focus:border-indigo-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                        <div className="grid grid-cols-4 gap-3">
                            {/* I will use map method */}
                            {categories.map((cat)=>{
                                return(
                                    <button type="button" onClick={()=> setFormData({...formData, category: cat})}
                                        className={`p-3 py-2.5 rounded-xl text-xs font-bold transition-all ${formData.category === cat ? 
                                        "bg-indigo-600 text-white scale-105 shadow-lg" :
                                        "bg-gray-100 text-gray-600 hover:bg-gray-200 "} `}
                                    >
                                        {cat}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Note (Optional)</label>
                <div className="relative">
                <textarea 
                    placeholder="Add a note..."
                    value={formData.notes} 
                    onChange={(e)=> setFormData({...formData, notes: e.target.value})} 
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                    focus:outline-online focus:border-indigo-500"
                />
                </div>
                
                <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
                        onClick={handleSubmit}
                    >
                        {initialData ? "Save Changes" : "Add Expense"}
                    </button>
                    <button className="px-4 py-3 rounded-xl border font-semibold"
                        onClick={onClose}    
                    >   
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Model;