import styled from "styled-components"

export const Section = styled.section`
    padding: 100px 40px;
    background: linear-gradient(135deg, #2a0735 0%, #4a1a5c 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 30% 40%, rgba(225, 13, 253, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(175, 13, 94, 0.08) 0%, transparent 50%);
        pointer-events: none;
    }

    @media (max-width: 768px) {
        padding: 80px 20px;
    }
`;

export const Card = styled.div`
    background: linear-gradient(145deg, rgba(61, 4, 82, 0.9), rgba(36, 25, 36, 0.9));
    backdrop-filter: blur(15px);
    border: 2px solid rgba(90, 12, 114, 0.5);
    border-radius: 25px;
    padding: 50px;
    max-width: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    text-align: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #e10dfd, #af0d5e, #e10dfd);
        background-size: 200% 100%;
        animation: shimmer 3s linear infinite;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 50px rgba(225, 13, 253, 0.2);
        border-color: rgba(225, 13, 253, 0.8);
    }

    h2 {
        font-weight: 600;
        font-size: 32px;
        margin-bottom: 40px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(225, 13, 253, 0.5);
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #e10dfd, #af0d5e);
            border-radius: 2px;
        }
    }

    .content {
        p {
            font-size: 16px;
            line-height: 1.8;
            color: #e0e0e0;
            text-align: left;
            margin-bottom: 25px;
            position: relative;

            &:last-child {
                margin-bottom: 0;
            }

            &::before {
                content: '';
                position: absolute;
                left: -20px;
                top: 8px;
                width: 6px;
                height: 6px;
                background: linear-gradient(45deg, #e10dfd, #af0d5e);
                border-radius: 50%;
            }
        }
    }

    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }

    @media (max-width: 768px) {
        padding: 30px 25px;
        
        h2 {
            font-size: 28px;
            margin-bottom: 30px;
        }

        .content p {
            font-size: 15px;
            line-height: 1.7;
            
            &::before {
                left: -15px;
                top: 6px;
                width: 4px;
                height: 4px;
            }
        }
    }
`;