import React, { useState, useEffect } from 'react';
import { IoIosMore } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { templateStore } from '../../../store/data/Templatedata';
import useCartStore from '../../../store/Cart/Cart';

export default function ShopMore() {
  const { templates, fetchTemplate, getCommentsOnTemplate, saveTemplate } = templateStore();
  const { addtoCart, getCartItems, cartItems } = useCartStore();
  const { templateId } = useParams();

  const [template, setTemplate] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComments] = useState("");
  const navigate = useNavigate();
  const [showCopyOptions, setShowCopyOptions] = useState(false);

  // 🧠 Fetch all templates
  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  // 🧠 Set the selected template
  useEffect(() => {
    if (templates.length > 0 && templateId) {
      const foundTemplate = templates.find((t) => String(t._id) === String(templateId));
      setTemplate(foundTemplate);
    }
  }, [templates, templateId]);

  // 🧠 Fetch comments
  useEffect(() => {
    const loadComments = async () => {
      if (templateId) {
        const commentsArray = await getCommentsOnTemplate(templateId);
        setComments(commentsArray);
      }
    };
    loadComments();
  }, [templateId, getCommentsOnTemplate]);

  // 🧠 Fetch cart items
  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  // ✅ Check if this template is already in cart
  const isAlreadyInCart = cartItems?.some(
    (item) => String(item.productId?._id) === String(templateId)
  );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowCopyOptions(false);
  };

  const handleAddComment = () => {
    try {
      if (newComment.trim() === "") return;
      templateStore.getState().CommnetOnTemplate(templateId, newComment);
      setComments((prev) => [...prev, { comment: newComment, userId: { name: "You" } }]);
      alert("Review added successfully");
      setNewComments("");
    } catch (error) {
      console.log("Error adding comment:", error);
    }
  };

  const handlesaveTemplate = async () => {
    try {
      const res = await saveTemplate(templateId);
      if (res.success) {
        alert("Template saved successfully");
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log("Error saving template:", error);
    }
  };

  const handleAddCart = async () => {
    try {
      const res = await addtoCart(templateId);
      if (res.success) {
        alert("Template added to cart successfully");
        await getCartItems(); // refresh cart
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };

  if (!template) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-20 pb-10">
      {/* Back Button */}
      <button
        onClick={() => navigate('/shop')}
        className="fixed top-24 left-4 md:left-10 z-20 bg-[#232323] rounded-full p-2 shadow-lg hover:bg-[#333] transition-colors"
        aria-label="Go back"
      >
        <MdOutlineKeyboardArrowLeft size={32} />
      </button>

      <div className="mx-3 flex justify-between flex-col lg:flex-row gap-8 pt-8">
        {/* Image Section */}
        <div className="w-full lg:w-2/3 flex justify-center items-center py-6">
          <img
            src={template.image}
            alt={template.title}
            className="w-[600px] rounded-2xl shadow-2xl object-contain border-2 border-[#232323]"
          />
        </div>

        {/* Info Panel */}
        <div className="max-w-lg w-full bg-[#181818] rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <button
                onClick={() => setShowCopyOptions(!showCopyOptions)}
                className="bg-[#232323] rounded-full p-2 hover:bg-[#333] transition-colors"
                aria-label="More options"
              >
                <IoIosMore size={26} />
              </button>
              {showCopyOptions && (
                <div className="absolute top-12 left-0 w-44 bg-[#232323] rounded-lg p-2 z-10 shadow-lg border border-[#333]">
                  <button
                    onClick={() => copyToClipboard(window.location.href)}
                    className="text-white hover:bg-[#333] w-full text-left px-3 py-2 rounded text-sm transition-colors"
                  >
                    Copy URL Link
                  </button>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                className="bg-white text-black py-2 px-6 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors shadow"
                onClick={handlesaveTemplate}
              >
                Save
              </button>

              {isAlreadyInCart ? (
                <button
                  className="bg-gray-500 text-white py-2 px-6 rounded-full text-base font-semibold cursor-not-allowed shadow"
                  disabled
                >
                  Already in Cart
                </button>
              ) : (
                <button
                  className="bg-white text-black py-2 px-6 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors shadow"
                  onClick={handleAddCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="py-2 border-b border-[#232323]">
            <h1 className="text-2xl font-bold mb-2 capitalize">{template.title}</h1>
            <div className="font-bold text-2xl text-white mb-2">
              {template.Price ? `$${template.Price}` : 'Free'}
            </div>
            <p className="text-base text-gray-400 leading-relaxed mb-2 capitalize">
              {template.description}
            </p>
            <button className="bg-gradient-to-r from-[#f5f5f5] to-[#e0e0e0] text-black text-base font-bold py-3 px-4 rounded-full w-full mt-2 hover:bg-gray-100 transition-colors shadow">
              Buy Now
            </button>
          </div>

          {/* Review Input */}
          <div className="flex flex-col gap-3 py-4 border-b border-[#232323]">
            <label className="font-semibold text-lg mb-1">Add a Review</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-lg px-3 py-2 text-black bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your review..."
                value={newComment}
                onChange={(e) => setNewComments(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={handleAddComment}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="pt-4 flex-1 overflow-hidden">
            <p className="font-bold text-xl mb-4">Reviews</p>
            <div
              className="space-y-4 overflow-y-auto pr-2 max-h-[280px] scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {comments.length === 0 ? (
                <p className="text-gray-400 text-base">No Reviews yet.</p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment._id || comment.comment}
                    className="bg-[#232323] rounded-xl p-4 shadow hover:bg-[#2b2b2b] transition-all duration-200"
                  >
                    <div className="flex items-center mb-3">
                      <img
                        src="https://via.placeholder.com/40"
                        alt={comment.userId?.name || 'User'}
                        className="w-9 h-9 rounded-full object-cover border-2 border-blue-600"
                      />
                      <span className="ml-3 font-semibold text-base flex items-center">
                        {comment.userId?.name || 'User'}
                        {comment.isVerified && (
                          <RiVerifiedBadgeFill className="inline text-blue-500 ml-2" />
                        )}
                      </span>
                    </div>
                    <p className="text-base text-gray-300">{comment.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
