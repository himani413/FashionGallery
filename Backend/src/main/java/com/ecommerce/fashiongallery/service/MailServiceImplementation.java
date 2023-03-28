package com.ecommerce.fashiongallery.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class MailServiceImplementation implements MailService {

    @Autowired
    private JavaMailSender mailSender;
    @Override
    public void send(String email,String link) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setTo(email);
            helper.setSubject("Confirm your email");
            helper.setFrom("dinukaekanayaka18@gmail.com");

            String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\""+link+"\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";

            helper.setText(content,true);
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            Logger.getLogger("failed to send email");
        }
    }

}
